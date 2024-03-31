import { Http } from '@/lib/http'
import type { MessageListRequest, MessageListResponse } from './protocols'

export const list = async ({
  config,
  params
}: MessageListRequest): Promise<MessageListResponse> => {
  return await Http.fetch<MessageListResponse>('/v1/messages', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
