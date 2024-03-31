import { Http } from '@/lib/http'
import type { PlanListRequest, PlanListResponse } from './protocols'

export const list = async ({
  config,
  params
}: PlanListRequest): Promise<PlanListResponse> => {
  return await Http.fetch<PlanListResponse>('/v1/plans', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
