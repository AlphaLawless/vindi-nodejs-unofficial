import { Http } from '@/lib/http'
import type { ChargesListRequest, ChargesListResponse } from './protocols'

export const list = async ({
  config,
  params
}: ChargesListRequest): Promise<ChargesListResponse> => {
  return await Http.fetch<ChargesListResponse>('/v1/charges', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
