import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/cheque_bookService'

/** Flutter cheque-config/getAll */
const columns = [
  { key: 'segmentName', label: 'Segment' },
  { key: 'chequeLeaveNumbers', label: 'Leaves' },
  { key: 'status', label: 'Status', statusChip: true },
]

const fields = [
  { key: 'segmentName', label: 'Segment', required: true },
  { key: 'chequeLeaveNumbers', label: 'Cheque Leave Numbers' },
  { key: 'status', label: 'Status', type: 'status' },
]

export default function ChequeBookPage() {
  return (
    <GenericCrudPage title="Cheque Book Management" service={service} columns={columns} fields={fields} />
  )
}
