import { Http } from '@/lib/http'
import type { PlanUpdateRequest, PlanUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: PlanUpdateRequest): Promise<PlanUpdateResponse> => {
  return await Http.fetch<PlanUpdateResponse>(`/v1/plans/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
