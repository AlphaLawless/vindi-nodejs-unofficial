import { Http } from '@/lib/http'
import type { ChargeGetRequest, ChargeGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: ChargeGetRequest): Promise<ChargeGetResponse> => {
  return await Http.fetch<ChargeGetResponse>(`/v1/charges/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
