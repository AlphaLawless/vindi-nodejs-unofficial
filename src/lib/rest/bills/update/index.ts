import { Http } from '@/lib/http'
import type { BillUpdateRequest, BillUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: BillUpdateRequest): Promise<BillUpdateResponse> => {
  return await Http.fetch<BillUpdateResponse>(`/v1/bills/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
