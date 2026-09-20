import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/feesLimitService'

const columns = [
  {
    "key": "feeCode",
    "label": "Fee Code"
  },
  {
    "key": "feeName",
    "label": "Name"
  },
  {
    "key": "transferType",
    "label": "Type"
  },
  {
    "key": "feeAmount",
    "label": "Amount"
  },
  {
    "key": "feePercent",
    "label": "%"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "feeCode",
    "label": "Fee Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "feeName",
    "label": "Fee Name",
    "required": true
  },
  {
    "key": "transferType",
    "label": "Transfer Type",
    "type": "select",
    "options": [
      {
        "value": "DOMESTIC",
        "label": "Domestic"
      },
      {
        "value": "INTERNATIONAL",
        "label": "International"
      },
      {
        "value": "OWN",
        "label": "Own Account"
      },
      {
        "value": "OTHER",
        "label": "Other"
      }
    ],
    "defaultValue": "DOMESTIC"
  },
  {
    "key": "channel",
    "label": "Channel",
    "type": "select",
    "options": [
      {
        "value": "IB",
        "label": "Internet Banking"
      },
      {
        "value": "MB",
        "label": "Mobile Banking"
      },
      {
        "value": "ALL",
        "label": "All"
      }
    ],
    "defaultValue": "ALL"
  },
  {
    "key": "feeAmount",
    "label": "Fee Amount"
  },
  {
    "key": "feePercent",
    "label": "Fee Percent"
  },
  {
    "key": "minFee",
    "label": "Min Fee"
  },
  {
    "key": "maxFee",
    "label": "Max Fee"
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

function FeesLimitPage() {
  return (
    <GenericCrudPage
      title="Fees Limit Configuration"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default FeesLimitPage
