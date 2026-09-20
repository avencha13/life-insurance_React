import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/financeService'

const columns = [
  {
    "key": "productCode",
    "label": "Product Code"
  },
  {
    "key": "productName",
    "label": "Name"
  },
  {
    "key": "minAmount",
    "label": "Min"
  },
  {
    "key": "maxAmount",
    "label": "Max"
  },
  {
    "key": "currency",
    "label": "Currency"
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
    "label": "Product Name (EN)",
    "required": true
  },
  {
    "key": "productNameAr",
    "label": "Product Name (AR)"
  },
  {
    "key": "minAmount",
    "label": "Min Amount",
    "required": true
  },
  {
    "key": "maxAmount",
    "label": "Max Amount",
    "required": true
  },
  {
    "key": "tenureMonths",
    "label": "Tenure (Months)"
  },
  {
    "key": "interestRate",
    "label": "Interest Rate %"
  },
  {
    "key": "currency",
    "label": "Currency",
    "defaultValue": "QAR"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

function FinancePage() {
  return (
    <GenericCrudPage
      title="Salary Advance Config"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default FinancePage
