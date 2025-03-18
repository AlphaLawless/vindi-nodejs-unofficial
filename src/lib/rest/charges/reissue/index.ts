import { Http } from '@/lib/http'
import type { ReissueChargeRequest, ReissueChargeResponse } from './protocols'

export const reissue = async ({
  config,
  body,
  id
}: ReissueChargeRequest): Promise<ReissueChargeResponse> => {
  return await Http.fetch<ReissueChargeResponse>(`/v1/charges/${id}/reissue`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
