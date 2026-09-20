import { createCrudService } from '@/features/common/crud/createCrudService'


const service = createCrudService({
  name: 'finance',
  base: 'data',
  urls: {
    fetchAll: 'salary-advance/getAll',
    create: 'salary-advance/save',
    update: 'salary-advance/save',
    delete: 'salary-advance/delete',
  },
  idKeys: ["id","productCode","code"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.productCode || row.code || ''),
    productCode: row.productCode || row.code || '',
    productName: row.productName || row.name || row.englishLabel || '',
    productNameAr: row.productNameAr || row.arabicLabel || '',
    minAmount: String(row.minAmount ?? row.min ?? ''),
    maxAmount: String(row.maxAmount ?? row.max ?? ''),
    tenureMonths: String(row.tenureMonths ?? row.tenure ?? ''),
    interestRate: String(row.interestRate ?? row.rate ?? ''),
    currency: row.currency || 'QAR',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
