import { createCrudService } from '@/features/common/crud/createCrudService'

/** Flutter AthkarUrl.fetchAll — athkar/fetchAll */
const service = createCrudService({
  name: 'athkar',
  base: 'data',
  urls: {
    fetchAll: 'athkar/fetchAll',
    create: 'athkar/add',
    update: 'athkar/update',
    delete: 'athkar/delete',
  },
  idKeys: ['id', 'rowNo'],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.rowNo || ''),
    rowNo: row.rowNo ?? '',
    categoryEn: row.categoryEn || '',
    categoryAr: row.categoryAr || '',
    contentEn: row.contentEn || '',
    contentAr: row.contentAr || '',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
