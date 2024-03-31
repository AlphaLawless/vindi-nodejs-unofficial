import { Http } from '@/lib/http'
import type { CustomerCreateRequest, CustomerCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: CustomerCreateRequest): Promise<CustomerCreateResponse> => {
  return await Http.fetch<CustomerCreateResponse>('/v1/customers', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
