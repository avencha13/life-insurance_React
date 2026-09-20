import { createCrudService } from '@/features/common/crud/createCrudService'
import { transferControlUrls } from '@/core/api/urls/transfer_controlUrls'

const service = createCrudService({
  name: 'limit_setup',
  base: 'data',
  urls: {
    fetchAll: transferControlUrls.getAll,
    create: transferControlUrls.save,
    update: transferControlUrls.save,
    delete: transferControlUrls.save,
  },
  idKeys: ["id","limitCode","code"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.limitCode || row.code || ''),
    limitCode: row.limitCode || row.code || '',
    limitName: row.limitName || row.name || row.englishLabel || '',
    transferType: row.transferType || row.type || '',
    channel: row.channel || row.channelCode || 'ALL',
    segmentCode: row.segmentCode || row.segment || '',
    perTxnLimit: String(row.perTxnLimit ?? row.txnLimit ?? row.limitAmount ?? ''),
    dailyLimit: String(row.dailyLimit ?? ''),
    monthlyLimit: String(row.monthlyLimit ?? ''),
    currency: row.currency || 'QAR',
    status: row.status || 'Y',
  }),
  buildDeleteBody: (id, row) => ({ ...row, id, status: 'N' }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
