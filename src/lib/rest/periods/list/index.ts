import { Http } from '@/lib/http'
import type { PeriodListRequest, PeriodListResponse } from './protocols'

export const list = async ({
  config,
  params
}: PeriodListRequest): Promise<PeriodListResponse> => {
  return await Http.fetch<PeriodListResponse>('/v1/periods', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
