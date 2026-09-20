import { createCrudService } from '@/features/common/crud/createCrudService'
import { productManagementUrls } from '@/core/api/urls/product_managementUrls'

const service = createCrudService({
  name: 'apply_for_product',
  base: 'wfc',
  urls: {
    fetchAll: productManagementUrls.fetchAllProduct,
    create: productManagementUrls.saveProduct,
    update: productManagementUrls.saveProduct,
    delete: productManagementUrls.deleteProduct,
  },
  idKeys: ["id","productCode","productId"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.productCode || row.productId || ''),
    productCode: row.productCode || row.code || '',
    productName: row.productName || row.englishLabel || row.name || '',
    productNameAr: row.productNameAr || row.arabicLabel || '',
    domainCode: row.domainCode || row.domain || '',
    channel: row.channel || row.channelCode || 'ALL',
    sequence: String(row.sequence ?? row.seq ?? ''),
    description: row.description || '',
    status: row.status || 'Y',
  }),
  buildDeleteBody: (id, row) => ({ ...row, id, status: 'N' }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
