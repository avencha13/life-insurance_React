import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/apply_for_productService'

const columns = [
  {
    "key": "productCode",
    "label": "Code"
  },
  {
    "key": "productName",
    "label": "Name"
  },
  {
    "key": "domainCode",
    "label": "Domain"
  },
  {
    "key": "channel",
    "label": "Channel"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "productCode",
    "label": "Product Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "productName",
    "label": "Name (English)",
    "required": true
  },
  {
    "key": "productNameAr",
    "label": "Name (Arabic)"
  },
  {
    "key": "domainCode",
    "label": "Domain Code"
  },
  {
    "key": "channel",
    "label": "Channel",
    "defaultValue": "ALL"
  },
  {
    "key": "sequence",
    "label": "Sequence"
  },
  {
    "key": "description",
    "label": "Description",
    "type": "textarea"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

function ApplyforProductPage() {
  return (
    <GenericCrudPage
      title="Apply for Product"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default ApplyforProductPage
