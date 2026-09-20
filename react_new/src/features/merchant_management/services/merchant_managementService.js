import { createCrudService } from '@/features/common/crud/createCrudService'


const service = createCrudService({
  name: 'merchant_management',
  base: 'data',
  urls: {
    fetchAll: 'merchantmaster/getAll',
    create: 'merchantmaster/create',
    update: 'merchantmaster/update',
    delete: 'merchantmaster/delete',
  },
  idKeys: ["id","merchantCode","code"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.merchantCode || row.code || ''),
    merchantCode: row.merchantCode || row.code || '',
    merchantName: row.merchantName || row.englishLabel || row.name || '',
    merchantNameAr: row.merchantNameAr || row.arabicLabel || '',
    category: row.category || row.merchantCategory || '',
    city: row.city || '',
    contactEmail: row.contactEmail || row.email || '',
    contactPhone: row.contactPhone || row.phone || row.mobile || '',
    mcc: row.mcc || row.mccCode || '',
    status: row.status || 'Y',
  }),
  buildDeleteBody: (id, row) => ({ ...row, id, status: 'N' }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
