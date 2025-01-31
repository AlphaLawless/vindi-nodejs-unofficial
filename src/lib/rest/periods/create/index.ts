import { Http } from '@/lib/http'
import type { PeriodCreateRequest, PeriodCreateResponse } from './protocols'

export const create = async ({
  config,
  id
}: PeriodCreateRequest): Promise<PeriodCreateResponse> => {
  return await Http.fetch<PeriodCreateResponse>(`/v1/periods/${id}/bill`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
