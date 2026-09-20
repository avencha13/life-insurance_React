import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/Apply_sub_productService'

/** Flutter apply_sub_product_table_page — SoftFetch imageEn/imageAr base64 or URL */
const columns = [
  { key: 'subProductCode', label: 'Code' },
  { key: 'nameEn', label: 'Name (EN)' },
  { key: 'nameAr', label: 'Name (AR)' },
  { key: 'productName', label: 'Product' },
  { key: 'imageEn', label: 'Image EN', image: true },
  { key: 'imageAr', label: 'Image AR', image: true },
  { key: 'priority', label: 'Priority' },
  { key: 'enableFlag', label: 'Enabled' },
]

const fields = [
  { key: 'subProductCode', label: 'Sub Product Code', required: true, lockOnEdit: true },
  { key: 'nameEn', label: 'Name (EN)', required: true },
  { key: 'nameAr', label: 'Name (AR)' },
  { key: 'productName', label: 'Product' },
  { key: 'imageEn', label: 'Image EN (URL or base64)', type: 'textarea' },
  { key: 'imageAr', label: 'Image AR (URL or base64)', type: 'textarea' },
  { key: 'priority', label: 'Priority' },
  { key: 'enableFlag', label: 'Enable Flag' },
]

export default function ApplySubProductPage() {
  return (
    <GenericCrudPage
      title="Apply Sub Product"
      service={service}
      columns={columns}
      fields={fields}
      statusKey="enableFlag"
    />
  )
}
