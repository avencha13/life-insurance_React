import { createCrudService } from '@/features/common/crud/createCrudService'


const service = createCrudService({
  name: 'follow_us',
  base: 'data',
  urls: {
    fetchAll: 'followus/getAll',
    create: 'reach-us/save',
    update: 'reach-us/save',
    delete: 'reach-us/delete',
  },
  idKeys: ["id","channel","code"],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.channel || row.code || ''),
    channel: row.channel || row.socialChannel || row.code || '',
    value: row.value || row.handle || row.contactValue || '',
    displayName: row.displayName || row.englishLabel || row.name || '',
    displayNameAr: row.displayNameAr || row.arabicLabel || '',
    icon: row.icon || row.iconName || '',
    sequence: String(row.sequence ?? row.seq ?? ''),
    url: row.url || row.link || '',
    status: row.status || 'Y',
  }),
  buildDeleteBody: (id, row) => ({ ...row, id, status: 'N' }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
