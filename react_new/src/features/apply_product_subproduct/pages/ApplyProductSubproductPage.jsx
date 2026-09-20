import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/apply_product_subproductService'

const columns = [
  { key: 'subProductId', label: 'Sub Product Id' },
  { key: 'subProductCode', label: 'Sub Product Code' },
  { key: 'productName', label: 'Product Name' },
  { key: 'nameEn', label: 'Name En' },
  { key: 'nameAr', label: 'Name Ar' },
  { key: 'productId', label: 'Product Id' },
  { key: 'imageUrlEn', label: 'Image Url En', image: true },
  { key: 'imageUrlAr', label: 'Image Url Ar', image: true },
]

const fields = [
  { key: 'subProductId', label: 'Sub Product Id', required: true },
  { key: 'subProductCode', label: 'Sub Product Code' },
  { key: 'productName', label: 'Product Name' },
  { key: 'nameEn', label: 'Name En' },
  { key: 'nameAr', label: 'Name Ar' },
  { key: 'productId', label: 'Product Id' },
]

export default function ApplyProductSubproductPage() {
  return (
    <GenericCrudPage
      title="Apply Product Subproduct"
      service={service}
      columns={columns}
      fields={fields} enableStatusFilter={false}
    />
  )
}
