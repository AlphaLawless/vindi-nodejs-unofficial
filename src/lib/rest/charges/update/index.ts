import { Http } from '@/lib/http'
import type { ChargeUpdateRequest, ChargeUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: ChargeUpdateRequest): Promise<ChargeUpdateResponse> => {
  return await Http.fetch<ChargeUpdateResponse>(`/v1/periods/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
