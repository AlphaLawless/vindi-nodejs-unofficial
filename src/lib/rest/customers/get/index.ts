import { Http } from '@/lib/http'
import type { CustomerGetRequest, CustomerGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: CustomerGetRequest): Promise<CustomerGetResponse> => {
  return await Http.fetch<CustomerGetResponse>(`/v1/customers/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
