import { createCrudService } from '@/features/common/crud/createCrudService'

/** Flutter ChequeBookConfigUrl — cheque-config/getAll */
const service = createCrudService({
  name: 'cheque_book',
  base: 'data',
  urls: {
    fetchAll: 'cheque-config/getAll',
    create: 'cheque-config/action',
    update: 'cheque-config/action',
    delete: 'cheque-config/action',
  },
  idKeys: ['id', 'segmentTxnId'],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.segmentTxnId || ''),
    segmentName: row.segmentName || '',
    chequeLeaveNumbers: row.chequeLeaveNumbers ?? row.leaves ?? '',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
