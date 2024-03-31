import { Http } from '@/lib/http'
import type { MessageGetRequest, MessageGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: MessageGetRequest): Promise<MessageGetResponse> => {
  return await Http.fetch<MessageGetResponse>(`/v1/messages/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
