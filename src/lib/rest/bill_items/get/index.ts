import { Http } from '@/lib/http'
import type { BillItemsGetRequest, BillItemsGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: BillItemsGetRequest): Promise<BillItemsGetResponse> => {
  return await Http.fetch<BillItemsGetResponse>(`/v1/bill_items/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
