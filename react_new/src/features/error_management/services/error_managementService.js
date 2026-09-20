import { createCrudService } from '@/features/common/crud/createCrudService'

/** Error Management â€” endpoints not in CSV; SoftFetch inferred error/* paths. */
const service = createCrudService({
  name: 'error_management',
  base: 'data',
  urls: {
    fetchAll: 'error-config/getAll',
    create: 'error/create',
    update: 'error/update',
    delete: 'error/delete',
  },
  idKeys: ['id', 'errorCode'],
  mapRow: (row) => ({
    ...row,
    id: String(row.id || row.errorCode || ''),
    errorCode: row.errorCode || '',
    errorMessage: row.errorMessage || row.englishLabel || row.message || '',
    errorMessageAr: row.errorMessageAr || row.arabicLabel || '',
    severity: row.severity || 'ERROR',
    httpStatus: row.httpStatus || '',
    status: row.status || 'Y',
  }),
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
