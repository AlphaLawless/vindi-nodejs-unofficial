import { Http } from '@/lib/http'
import type {
  CustomerArchiveRequest,
  CustomerArchiveResponse
} from './protocols'

export const archive = async ({
  config,
  id
}: CustomerArchiveRequest): Promise<CustomerArchiveResponse> => {
  return await Http.fetch<CustomerArchiveResponse>(`/v1/customers/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
