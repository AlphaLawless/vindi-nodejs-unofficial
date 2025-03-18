import { Http } from '@/lib/http'
import type { CaptureChargeRequest, CaptureChargeResponse } from './protocols'

export const capture = async ({
  config,
  id
}: CaptureChargeRequest): Promise<CaptureChargeResponse> => {
  return await Http.fetch<CaptureChargeResponse>(`/v1/charges/${id}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
