import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/afaqService'

/** Flutter afaq-country-currencies/getAll */
const columns = [
  { key: 'countryCode', label: 'Country Code' },
  { key: 'countryDesc', label: 'Country' },
  { key: 'currencyCode', label: 'Currency' },
  { key: 'isoNumber', label: 'ISO' },
  { key: 'status', label: 'Status', statusChip: true },
]

const fields = [
  { key: 'countryCode', label: 'Country Code', required: true },
  { key: 'countryDesc', label: 'Country', required: true },
  { key: 'currencyCode', label: 'Currency Code' },
  { key: 'isoNumber', label: 'ISO Number' },
  { key: 'status', label: 'Status', type: 'status' },
]

export default function AfaqManagementPage() {
  return (
    <GenericCrudPage title="Afaq Management" service={service} columns={columns} fields={fields} />
  )
}
