import { Http } from '@/lib/http'
import type { PeriodGetRequest, PeriodGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: PeriodGetRequest): Promise<PeriodGetResponse> => {
  return await Http.fetch<PeriodGetResponse>(`/v1/periods/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
