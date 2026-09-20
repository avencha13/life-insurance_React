import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/finance_offerService'

const columns = [
  { key: 'id', label: 'Id' },
  { key: 'segment', label: 'Segment' },
  { key: 'instrument', label: 'Instrument' },
  { key: 'product', label: 'Product' },
  { key: 'term', label: 'Term' },
  { key: 'currency', label: 'Currency' },
  { key: 'minAmount', label: 'Min' },
  { key: 'maxAmount', label: 'Max' },
]

const fields = [
  { key: 'segment', label: 'Segment', required: true },
  { key: 'instrument', label: 'Instrument' },
  { key: 'product', label: 'Product' },
  { key: 'term', label: 'Term' },
  { key: 'period', label: 'Period' },
  { key: 'currency', label: 'Currency' },
  { key: 'minAmount', label: 'Min Amount' },
  { key: 'maxAmount', label: 'Max Amount' },
]

export default function FinanceOfferPage() {
  return (
    <GenericCrudPage title="Finance Offer" service={service} columns={columns} fields={fields} enableStatusFilter={false} />
  )
}
