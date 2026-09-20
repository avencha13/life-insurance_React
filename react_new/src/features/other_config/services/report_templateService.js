import { createCrudService } from '@/features/common/crud/createCrudService'

const service = createCrudService({
  name: 'report_template',
  base: 'data',
  urls: {
  "fetchAll": "report-template/getAll",
  "create": "report-template/save",
  "update": "report-template/save",
  "delete": "report-template/delete"
},
  idKeys: ["id","templateCode"],
})

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
