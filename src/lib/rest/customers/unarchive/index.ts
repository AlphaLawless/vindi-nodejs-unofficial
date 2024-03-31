import { Http } from '@/lib/http'
import type {
  CustomerUnarchiveRequest,
  CustomerUnarchiveResponse
} from './protocols'

export const unarchive = async ({
  config,
  id
}: CustomerUnarchiveRequest): Promise<CustomerUnarchiveResponse> => {
  return await Http.fetch<CustomerUnarchiveResponse>(
    `/v1/customers/${id}/unarchive`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.key}:`).toString(
          'base64'
        )}`
      },
      ...config.options
    }
  )
}
