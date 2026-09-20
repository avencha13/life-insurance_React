import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/error_managementService'

const columns = [
  { key: 'errorCode', label: 'Error Code' },
  { key: 'errorMessage', label: 'Message (EN)' },
  { key: 'severity', label: 'Severity' },
  { key: 'status', label: 'Status', statusChip: true },
]

const fields = [
  { key: 'errorCode', label: 'Error Code', required: true, lockOnEdit: true },
  { key: 'errorMessage', label: 'Message (English)', required: true },
  { key: 'errorMessageAr', label: 'Message (Arabic)' },
  {
    key: 'severity',
    label: 'Severity',
    type: 'select',
    options: [
      { value: 'INFO', label: 'Info' },
      { value: 'WARN', label: 'Warning' },
      { value: 'ERROR', label: 'Error' },
      { value: 'FATAL', label: 'Fatal' },
    ],
    defaultValue: 'ERROR',
  },
  { key: 'httpStatus', label: 'HTTP Status' },
  { key: 'status', label: 'Status', type: 'status' },
]

function ErrorManagementPage() {
  return (
    <GenericCrudPage
      title="Error Management"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default ErrorManagementPage
