import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/follow_usService'

const columns = [
  {
    "key": "channel",
    "label": "Channel"
  },
  {
    "key": "displayName",
    "label": "Display Name"
  },
  {
    "key": "value",
    "label": "Value"
  },
  {
    "key": "sequence",
    "label": "Seq"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "channel",
    "label": "Channel",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "displayName",
    "label": "Display Name (English)",
    "required": true
  },
  {
    "key": "displayNameAr",
    "label": "Display Name (Arabic)"
  },
  {
    "key": "value",
    "label": "Value / Handle",
    "required": true
  },
  {
    "key": "url",
    "label": "URL"
  },
  {
    "key": "icon",
    "label": "Icon"
  },
  {
    "key": "sequence",
    "label": "Sequence"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

function FollowUsReachUsPage() {
  return (
    <GenericCrudPage
      title="Follow Us / Reach Us"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}

export default FollowUsReachUsPage
