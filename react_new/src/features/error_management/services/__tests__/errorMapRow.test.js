import { describe, it, expect } from 'vitest'
import service from '../error_managementService'

describe('error_managementService mapRow', () => {
  it('keeps SoftFetch paths and coerces id after spread', () => {
    expect(service.urls.fetchAll).toBe('error/getAll')
    const mapped = service.mapRow({
      id: 7,
      errorCode: 'E001',
      englishLabel: 'Boom',
      arabicLabel: 'خطأ',
      severity: 'ERROR',
      httpStatus: 500,
    })
    expect(mapped.id).toBe('7')
    expect(mapped.errorMessage).toBe('Boom')
    expect(mapped.errorMessageAr).toBe('خطأ')
    expect(mapped.httpStatus).toBe(500)
  })
})
