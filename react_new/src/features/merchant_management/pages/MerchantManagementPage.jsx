import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/merchant_managementService'

const columns = [
  {
    "key": "merchantCode",
    "label": "Code"
  },
  {
    "key": "merchantName",
    "label": "Name"
  },
  {
    "key": "category",
    "label": "Category"
  },
  {
    "key": "city",
    "label": "City"
  },
  {
    "key": "mcc",
    "label": "MCC"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "merchantCode",
    "label": "Merchant Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "merchantName",
    "label": "Name (English)",
    "required": true
  },
  {
    "key": "merchantNameAr",
    "label": "Name (Arabic)"
  },
  {
    "key": "category",
    "label": "Category"
  },
  {
    "key": "city",
    "label": "City"
  },
  {
    "key": "contactEmail",
    "label": "Contact Email"
  },
  {
    "key": "contactPhone",
    "label": "Contact Phone"
  },
  {
    "key": "mcc",
    "label": "MCC Code"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

function MerchantManagementPage() {
  return (
    <GenericCrudPage
      title="Merchant Management"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default MerchantManagementPage
