import { Http } from '@/lib/http'
import type { RefundChargeRequest, RefundChargeResponse } from './protocols'

export const refund = async ({
  config,
  body,
  id
}: RefundChargeRequest): Promise<RefundChargeResponse> => {
  return await Http.fetch<RefundChargeResponse>(`/v1/charges/${id}/refund`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
