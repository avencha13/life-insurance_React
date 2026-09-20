import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/limit_setupService'

const columns = [
  {
    "key": "limitCode",
    "label": "Code"
  },
  {
    "key": "limitName",
    "label": "Name"
  },
  {
    "key": "transferType",
    "label": "Type"
  },
  {
    "key": "channel",
    "label": "Channel"
  },
  {
    "key": "perTxnLimit",
    "label": "Per Txn"
  },
  {
    "key": "dailyLimit",
    "label": "Daily"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "limitCode",
    "label": "Limit Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "limitName",
    "label": "Limit Name",
    "required": true
  },
  {
    "key": "transferType",
    "label": "Transfer Type",
    "type": "select",
    "required": true,
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
        "value": "WITHIN_BANK",
        "label": "Within Bank"
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
    "key": "segmentCode",
    "label": "Segment Code"
  },
  {
    "key": "perTxnLimit",
    "label": "Per Transaction Limit",
    "required": true
  },
  {
    "key": "dailyLimit",
    "label": "Daily Limit"
  },
  {
    "key": "monthlyLimit",
    "label": "Monthly Limit"
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

function LimitSetupPage() {
  return (
    <GenericCrudPage
      title="Transfer Limit Configuration"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default LimitSetupPage
