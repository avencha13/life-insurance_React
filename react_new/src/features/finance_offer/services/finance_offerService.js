import { createCrudService } from '@/features/common/crud/createCrudService'


const service = createCrudService({
  name: 'finance_offer',
  base: 'data',
  urls: {
    fetchAll: 'finance-offer/get-all',
    create: 'finance-offer/create',
    update: 'finance-offer/update',
    delete: 'finance-offer/delete',
  },
  idKeys: ["id","offerCode","code"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.offerCode || row.code || ''),
    offerCode: row.offerCode || row.code || '',
    offerName: row.offerName || row.name || row.englishLabel || '',
    offerNameAr: row.offerNameAr || row.arabicLabel || '',
    productCode: row.productCode || row.product || '',
    discountPercent: String(row.discountPercent ?? row.discount ?? ''),
    startDate: row.startDate || '',
    endDate: row.endDate || '',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
