import { Http } from '@/lib/http'
import type { BillCancelRequest, BillCancelResponse } from './protocols'

export const cancel = async ({
  config,
  id,
  params
}: BillCancelRequest): Promise<BillCancelResponse> => {
  return await Http.fetch<BillCancelResponse>(`/v1/bills/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
