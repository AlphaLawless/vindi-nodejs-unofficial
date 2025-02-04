import { Http } from '@/lib/http'
import type { BillGetRequest, BillGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: BillGetRequest): Promise<BillGetResponse> => {
  return await Http.fetch<BillGetResponse>(`/v1/bills/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
