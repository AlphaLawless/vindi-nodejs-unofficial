import { Http } from '@/lib/http'
import type { PlanGetRequest, PlanGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: PlanGetRequest): Promise<PlanGetResponse> => {
  return await Http.fetch<PlanGetResponse>(`/v1/plans/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
