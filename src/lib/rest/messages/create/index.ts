import { Http } from '@/lib/http'
import type { MessageCreateRequest, MessageCreateResponse } from './protocols'

export const create = async ({
  config,
  body
}: MessageCreateRequest): Promise<MessageCreateResponse> => {
  return await Http.fetch<MessageCreateResponse>('/v1/customers', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
