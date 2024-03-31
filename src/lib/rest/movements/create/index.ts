import { Http } from '@/lib/http'
import type { MovementCreateRequest, MovementCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: MovementCreateRequest): Promise<MovementCreateResponse> => {
  return await Http.fetch<MovementCreateResponse>('/v1/movements', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
