import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/direct_remittanceService'

/** Flutter beneficiaryAccountType/getAll (SoftFetch remittance list currently wired here) */
const columns = [
  { key: 'beneficiaryAccountTypeCode', label: 'Code' },
  { key: 'beneficiaryAccountTypeName', label: 'Name' },
  { key: 'status', label: 'Status', statusChip: true },
]

const fields = [
  { key: 'beneficiaryAccountTypeCode', label: 'Code', required: true, lockOnEdit: true },
  { key: 'beneficiaryAccountTypeName', label: 'Name', required: true },
  { key: 'status', label: 'Status', type: 'status' },
]

export default function DirectRemittancePage() {
  return (
    <GenericCrudPage title="Direct Remittance" service={service} columns={columns} fields={fields} />
  )
}
