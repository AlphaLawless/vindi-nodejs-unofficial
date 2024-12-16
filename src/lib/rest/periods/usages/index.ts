import { Http } from '@/lib/http'
import type { PeriodUsageGetRequest, PeriodUsageGetResponse } from './protocols'

export const usages = async ({
  config,
  id
}: PeriodUsageGetRequest): Promise<PeriodUsageGetResponse> => {
  return await Http.fetch<PeriodUsageGetResponse>(`/v1/periods/${id}/usages`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
