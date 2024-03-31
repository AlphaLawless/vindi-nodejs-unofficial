import { Http } from '@/lib/http'
import type { UserCurrentGetRequest, UserCurrentGetResponse } from './protocols'

export const get = async ({
  config
}: UserCurrentGetRequest): Promise<UserCurrentGetResponse> => {
  return await Http.fetch<UserCurrentGetResponse>('/v1/users/current', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
