import { Http } from '@/lib/http'
import type { RetryChargeRequest, RetryChargeResponse } from './protocols'

export const retry_charge = async ({
  config,
  body,
  id
}: RetryChargeRequest): Promise<RetryChargeResponse> => {
  return await Http.fetch<RetryChargeResponse>(`/v1/charges/${id}/charge`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
