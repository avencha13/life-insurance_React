import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/CMSService'

const columns = [
  {
    "key": "labelKey",
    "label": "Label Key"
  },
  {
    "key": "englishLabel",
    "label": "English"
  },
  {
    "key": "arabicLabel",
    "label": "Arabic"
  },
  {
    "key": "moduleCode",
    "label": "Module"
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
    "key": "labelKey",
    "label": "Label Key",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "englishLabel",
    "label": "English Label",
    "required": true
  },
  {
    "key": "arabicLabel",
    "label": "Arabic Label"
  },
  {
    "key": "moduleCode",
    "label": "Module Code"
  },
  {
    "key": "screenCode",
    "label": "Screen Code"
  },
  {
    "key": "channel",
    "label": "Channel",
    "type": "select",
    "options": [
      {
        "value": "MB",
        "label": "Mobile Banking"
      },
      {
        "value": "IB",
        "label": "Internet Banking"
      },
      {
        "value": "ALL",
        "label": "All"
      }
    ],
    "defaultValue": "ALL"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

function CMSi18nPage() {
  return (
    <GenericCrudPage
      title="CMS / i18n Labels"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default CMSi18nPage
