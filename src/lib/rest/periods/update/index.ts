import { Http } from '@/lib/http'
import type { PeriodUpdateRequest, PeriodUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: PeriodUpdateRequest): Promise<PeriodUpdateResponse> => {
  return await Http.fetch<PeriodUpdateResponse>(`/v1/periods/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
