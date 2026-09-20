import { useEffect, useMemo, useState } from 'react'
import Box from '@/components/layout/Box/Box'
import Form from '@/components/layout/Form/Form'
import {
  RowActionType,
  StatusChip,
  UIAddButton,
  UIButton,
  UICard,
  UIDataTable,
  UIDialog,
  UIDropdown,
  UIInput,
  UILoader,
  UIPdfExcelDownload,
  UIRightPanel,
  UISummaryStatusRow,
  UIText,
  rowAction,
  useToast,
} from '@/components/ui'
import { t } from '@/core/i18n/t'
import { useCrudList } from '@/features/common/crud/useCrudList'
import service, {
  fetchLanguageSummary,
  fetchScreenIds,
  fetchUnits,
} from '../services/banner_configurationService'
import '@/features/common/crud/GenericCrudPage.css'

function toOptions(payload, valueKey = 'code', labelKey = 'name') {
  const list = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload?.content)
        ? payload.content
        : []
  return list.map((item, i) => {
    if (typeof item === 'string') return { value: item, label: item }
    const value =
      item[valueKey] || item.id || item.screenId || item.unitId || item.langCode || item.code || String(i)
    const label =
      item[labelKey] || item.description || item.screenName || item.unitName || item.langName || item.name || value
    return { value: String(value), label: String(label) }
  })
}

function BannerForm({ mode, initial, onSubmit, onClose, screenOptions, unitOptions, langOptions }) {
  const [form, setForm] = useState({
    bannerName: '',
    screenId: '',
    unitId: '',
    language: '',
    status: 'Y',
    ...initial,
  })
  const [errors, setErrors] = useState({})
  const readOnly = mode === 'view'
  const setField = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }))
    setErrors((p) => ({ ...p, [k]: '' }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (readOnly) return
    const next = {}
    if (!String(form.bannerName || '').trim()) next.bannerName = t('Required_Field', 'This field is required')
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    onSubmit?.(form)
  }
  return (
    <Form className="generic-crud-form" onSubmit={handleSubmit}>
      <UIInput
        label={t('Banner_Name', 'Banner Name')}
        value={form.bannerName}
        readOnly={readOnly}
        error={errors.bannerName}
        onChange={(e) => setField('bannerName', e.target.value)}
        required
      />
      <UIDropdown
        label={t('Screen', 'Screen')}
        value={form.screenId}
        disabled={readOnly}
        readOnly={readOnly}
        onChange={(v) => setField('screenId', v)}
        options={screenOptions.length ? screenOptions : [{ value: form.screenId || '', label: form.screenId || '—' }]}
      />
      <UIDropdown
        label={t('Unit', 'Unit')}
        value={form.unitId}
        disabled={readOnly}
        readOnly={readOnly}
        onChange={(v) => setField('unitId', v)}
        options={unitOptions.length ? unitOptions : [{ value: form.unitId || '', label: form.unitId || '—' }]}
      />
      <UIDropdown
        label={t('Language', 'Language')}
        value={form.language}
        disabled={readOnly}
        readOnly={readOnly}
        onChange={(v) => setField('language', v)}
        options={langOptions.length ? langOptions : [{ value: form.language || 'en', label: form.language || 'en' }]}
      />
      <UIDropdown
        label={t('Status', 'Status')}
        value={form.status}
        disabled={readOnly}
        readOnly={readOnly}
        onChange={(v) => setField('status', v)}
        options={[
          { value: 'Y', label: t('Active', 'Active') },
          { value: 'N', label: t('Inactive', 'Inactive') },
        ]}
      />
      <Box className="generic-crud-form-actions">
        <UIButton type="button" variant="outline" onClick={onClose}>
          {t('Close', 'Close')}
        </UIButton>
        {!readOnly ? (
          <UIButton type="submit" variant="primary">
            {t('Save', 'Save')}
          </UIButton>
        ) : null}
      </Box>
    </Form>
  )
}

export default function BannerConfigurationPage() {
  const { rows, loading, error, upsert, remove } = useCrudList(service)
  const toast = useToast()
  const [panel, setPanel] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [screenOptions, setScreenOptions] = useState([])
  const [unitOptions, setUnitOptions] = useState([])
  const [langOptions, setLangOptions] = useState([])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const [screens, units, langs] = await Promise.all([
          fetchScreenIds().catch(() => null),
          fetchUnits().catch(() => null),
          fetchLanguageSummary().catch(() => null),
        ])
        if (cancelled) return
        setScreenOptions(toOptions(screens, 'screenId', 'description'))
        setUnitOptions(toOptions(units, 'unitId', 'unitName'))
        setLangOptions(toOptions(langs, 'langCode', 'langName'))
      } catch {
        /* offline — keep empty dropdowns */
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const columns = useMemo(
    () => [
      { key: 'bannerId', label: t('Banner_ID', 'Banner ID') },
      { key: 'bannerName', label: t('Banner_Name', 'Banner Name') },
      { key: 'screenId', label: t('Screen', 'Screen') },
      {
        key: 'status',
        label: t('Status', 'Status'),
        statusChip: true,
        render: (row) => <StatusChip status={row.status} />,
      },
    ],
    [],
  )

  const isActive = (s) => ['Y', 'YES', 'ACT', 'ACTIVE'].includes(String(s || '').toUpperCase())
  const activeCount = useMemo(
    () => rows.filter((r) => isActive(r.status)).length,
    [rows],
  )
  const filtered = useMemo(() => {
    if (statusFilter === 'active') return rows.filter((r) => isActive(r.status))
    if (statusFilter === 'inactive') return rows.filter((r) => !isActive(r.status))
    return rows
  }, [rows, statusFilter])

  async function handleSave(form) {
    try {
      await upsert(form)
      toast.success(t('Saved_successfully', 'Saved successfully'))
      setPanel(null)
    } catch (err) {
      toast.error(err?.message || t('Save_failed', 'Save failed'))
    }
  }

  return (
    <Box className="generic-crud-page">
      <Box className="generic-crud-page-header">
        <UIText as="h2" variant="h24SemiBold">
          {t('Banner_Configuration', 'Banner Configuration')}
        </UIText>
        <UIAddButton label={t('Add_Banner', 'Add Banner')} onClick={() => setPanel({ mode: 'add' })} />
      </Box>
      <UISummaryStatusRow
        totalCount={rows.length}
        activeCount={activeCount}
        inactiveCount={rows.length - activeCount}
        totalLabel={t('Total_Banners', 'Total Banners')}
        activeLabel={t('Active_Banners', 'Active Banners')}
        inactiveLabel={t('Inactive_Banners', 'Inactive Banners')}
        value={statusFilter}
        onChange={setStatusFilter}
      />
      <Box className="generic-crud-export">
        <UIPdfExcelDownload
          title={t('Banner_List', 'Banner List')}
          columns={columns}
          data={filtered}
          pdfFileName="banner_configuration.pdf"
          excelFileName="banner_configuration.xlsx"
        />
      </Box>
      <UICard>
        {loading ? <UILoader label={t('Loading', 'Loading…')} /> : null}
        {error ? (
          <UIText variant="b13Regular" className="generic-crud-page-error">
            {error}
          </UIText>
        ) : null}
        <UIDataTable
          title={t('Banner_List', 'Banner List')}
          columns={columns}
          rows={filtered}
          rowKey="id"
          rowActions={[
            rowAction(RowActionType.view),
            rowAction(RowActionType.modify),
            rowAction(RowActionType.delete),
          ]}
          onView={(row) => setPanel({ mode: 'view', row })}
          onModify={(row) => setPanel({ mode: 'edit', row })}
          onDelete={(row) => setDeleteTarget(row)}
        />
      </UICard>
      <UIRightPanel
        open={Boolean(panel)}
        title={
          panel?.mode === 'edit'
            ? t('Edit_Banner', 'Edit Banner')
            : panel?.mode === 'view'
              ? t('View_Banner', 'View Banner')
              : t('Add_Banner', 'Add Banner')
        }
        onClose={() => setPanel(null)}
      >
        {panel ? (
          <BannerForm
            key={`${panel.mode}-${panel.row?.id || 'new'}`}
            mode={panel.mode}
            initial={panel.row}
            onClose={() => setPanel(null)}
            onSubmit={handleSave}
            screenOptions={screenOptions}
            unitOptions={unitOptions}
            langOptions={langOptions}
          />
        ) : null}
      </UIRightPanel>
      <UIDialog
        open={Boolean(deleteTarget)}
        title={t('Delete_Banner', 'Delete Banner')}
        message={t('Delete_confirm', 'Are you sure you want to delete this record? This action cannot be undone.')}
        confirmLabel={t('Delete', 'Delete')}
        cancelLabel={t('Cancel', 'Cancel')}
        tone="danger"
        onCancel={() => setDeleteTarget(null)}
        onConfirm={async () => {
          try {
            await remove(deleteTarget.id, deleteTarget)
            toast.success(t('Deleted_successfully', 'Deleted successfully'))
            setDeleteTarget(null)
          } catch (err) {
            toast.error(err?.message || t('Delete_failed', 'Delete failed'))
          }
        }}
      />
    </Box>
  )
}
