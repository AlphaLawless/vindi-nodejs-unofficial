import { Http } from '@/lib/http'
import type { BillsListRequest, BillsListResponse } from './protocols'

export const list = async ({
  config,
  params
}: BillsListRequest): Promise<BillsListResponse> => {
  return await Http.fetch<BillsListResponse>('/v1/bills', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
