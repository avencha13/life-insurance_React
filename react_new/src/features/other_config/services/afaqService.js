import { createCrudService } from '@/features/common/crud/createCrudService'

/** Flutter AfaqCountryCurrencyUrl — afaq-country-currencies/getAll */
const service = createCrudService({
  name: 'afaq',
  base: 'data',
  urls: {
    fetchAll: 'afaq-country-currencies/getAll',
    create: 'afaq-country-currencies/manage',
    update: 'afaq-country-currencies/manage',
    delete: 'afaq-country-currencies/manage',
  },
  idKeys: ['id', 'countryCode'],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.countryCode || ''),
    countryCode: row.countryCode ?? '',
    countryDesc: row.countryDesc || '',
    currencyCode: row.currencyCode || '',
    isoNumber: row.isoNumber ?? '',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
