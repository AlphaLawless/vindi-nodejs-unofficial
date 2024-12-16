import { Http } from '@/lib/http'
import type { CustomerUpdateRequest, CustomerUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: CustomerUpdateRequest): Promise<CustomerUpdateResponse> => {
  return await Http.fetch<CustomerUpdateResponse>(`/v1/customers/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
