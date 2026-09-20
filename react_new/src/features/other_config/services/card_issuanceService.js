import { createCrudService } from '@/features/common/crud/createCrudService'

/** Card Issuance — Flutter: dataurl + instant-credit-card/* */
const service = createCrudService({
  name: 'card_issuance',
  base: 'data',
  urls: {
    fetchAll: 'instant-credit-card/getAll',
    create: 'instant-credit-card/manage',
    update: 'instant-credit-card/manage',
    delete: 'instant-credit-card/manage',
  },
  idKeys: ['id', 'issuanceCode'],
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service