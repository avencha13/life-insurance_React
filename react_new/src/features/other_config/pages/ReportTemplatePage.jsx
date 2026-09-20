import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/report_templateService'

const columns = [
  {
    "key": "templateCode",
    "label": "Code"
  },
  {
    "key": "templateName",
    "label": "Name"
  },
  {
    "key": "status",
    "label": "Status",
    "statusChip": true
  }
]

const fields = [
  {
    "key": "templateCode",
    "label": "Template Code",
    "required": true,
    "lockOnEdit": true
  },
  {
    "key": "templateName",
    "label": "Template Name",
    "required": true
  },
  {
    "key": "format",
    "label": "Format",
    "defaultValue": "PDF"
  },
  {
    "key": "status",
    "label": "Status",
    "type": "status"
  }
]

export default function ReportTemplatePage() {
  return (
    <GenericCrudPage
      title="Report Template Maintenance"
      service={service}
      columns={columns}
      fields={fields}
    />
  )
}
