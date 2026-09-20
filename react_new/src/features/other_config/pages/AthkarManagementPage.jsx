import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/athkarService'

/** Flutter athkar/fetchAll */
const columns = [
  { key: 'rowNo', label: 'Row' },
  { key: 'categoryEn', label: 'Category (EN)' },
  { key: 'categoryAr', label: 'Category (AR)' },
  { key: 'status', label: 'Status', statusChip: true },
]

const fields = [
  { key: 'rowNo', label: 'Row No' },
  { key: 'categoryEn', label: 'Category (EN)', required: true },
  { key: 'categoryAr', label: 'Category (AR)' },
  { key: 'contentEn', label: 'Content (EN)', type: 'textarea' },
  { key: 'contentAr', label: 'Content (AR)', type: 'textarea' },
  { key: 'status', label: 'Status', type: 'status' },
]

export default function AthkarManagementPage() {
  return (
    <GenericCrudPage title="Athkar Management" service={service} columns={columns} fields={fields} />
  )
}
