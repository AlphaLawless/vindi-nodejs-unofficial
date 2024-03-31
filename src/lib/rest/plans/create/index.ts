import { Http } from '@/lib/http'
import type { PlanCreateRequest, PlanCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: PlanCreateRequest): Promise<PlanCreateResponse> => {
  return await Http.fetch<PlanCreateResponse>('/v1/plans', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
