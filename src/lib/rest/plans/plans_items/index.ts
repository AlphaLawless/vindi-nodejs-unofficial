import { Http } from '@/lib/http'
import type { PlanItemsRequest, PlanItemsResponse } from './protocols'

export const items = async ({
  config,
  params,
  id
}: PlanItemsRequest): Promise<PlanItemsResponse> => {
  return await Http.fetch<PlanItemsResponse>(`/v1/plans/${id}/plan_items`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
