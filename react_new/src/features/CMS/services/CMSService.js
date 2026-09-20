import { createCrudService } from '@/features/common/crud/createCrudService'
import { i18MaintenanceUrls } from '@/core/api/urls/i18_maintenanceUrls'

const service = createCrudService({
  name: 'CMS',
  base: 'data',
  urls: {
    fetchAll: i18MaintenanceUrls.labels,
    create: i18MaintenanceUrls.modify,
    update: i18MaintenanceUrls.modify,
    delete: i18MaintenanceUrls.modify,
  },
  idKeys: ["id","labelKey","key"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.labelKey || row.key || ''),
    labelKey: row.labelKey || row.key || '',
    englishLabel: row.englishLabel || row.en || row.english || '',
    arabicLabel: row.arabicLabel || row.ar || row.arabic || '',
    moduleCode: row.moduleCode || row.module || '',
    screenCode: row.screenCode || row.screen || '',
    channel: row.channel || row.channelCode || '',
    status: row.status || 'Y',
  }),
  buildDeleteBody: (id, row) => ({ ...row, id, status: 'N' }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
