import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/card_issuanceService'

const columns = [
  {
    "key": "issuanceCode",
    "label": "Code"
  },
  {
    "key": "description",
    "label": "Description"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "issuanceCode",
    "label": "Issuance Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "description",
    "label": "Description",
    "required": true
  },
  {
    "key": "feeAmount",
    "label": "Fee Amount"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

export default function CardIssuancePage() {
  return (
    <GenericCrudPage
      title="Card Issuance"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}
