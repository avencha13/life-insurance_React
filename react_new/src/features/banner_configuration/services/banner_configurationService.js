import { apiRequest, isApiSuccess, API_SUCCESS_CODE, apiStatusDescription, ApiError } from '@/core/api/client'
import { bannerConfigurationUrls } from '@/core/api/urls/banner_configurationUrls'
import { createCrudService } from '@/features/common/crud/createCrudService'

/** Banner list/manage — Flutter banner feature (dropdown URLs from banner_configuration_url.dart). */
export const BANNER_MANAGE = 'banner/manage'
export const BANNER_SUMMARY = 'banner/summary'

const service = createCrudService({
  name: 'banner_configuration',
  base: 'data',
  urls: {
    fetchAll: BANNER_SUMMARY,
    create: BANNER_MANAGE,
    update: BANNER_MANAGE,
    delete: BANNER_MANAGE,
  },
  // no seed — SoftFetch only (no mock fallback)
  idKeys: ['id', 'bannerId'],
})

export async function fetchLanguageSummary() {
  const res = await apiRequest(bannerConfigurationUrls.languageSummary, {
    base: 'data',
    method: 'POST',
    body: {},
  })
  return res.data
}

export async function fetchScreenIds() {
  const res = await apiRequest(bannerConfigurationUrls.screenid, {
    base: 'data',
    method: 'POST',
    body: {},
  })
  return res.data
}

/** Flutter/i18 + banner: units/all is GET-only (POST => 405). */
export async function fetchUnits() {
  const res = await apiRequest(bannerConfigurationUrls.country, {
    base: 'data',
    method: 'GET',
  })
  return res.data
}

/** Channel dropdown — channel/list is GET-only (POST => 405). */
export async function fetchChannels() {
  const res = await apiRequest('channel/list', {
    base: 'data',
    method: 'GET',
  })
  return res.data
}

export const fetchAll = () => service.fetchAll()
export const save = (p) => service.save(p)
export const remove = (id, row) => service.remove(id, row)
export { service }
export default service
