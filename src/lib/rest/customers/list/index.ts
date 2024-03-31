import { Http } from '@/lib/http'
import type { CustomerListRequest, CustomerListResponse } from './protocols'

export const list = async ({
  config,
  params
}: CustomerListRequest): Promise<CustomerListResponse> => {
  return await Http.fetch<CustomerListResponse>('/v1/customers', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
