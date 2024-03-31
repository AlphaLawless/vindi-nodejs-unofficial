import { Http } from '@/lib/http'
import type { RolesListRequest, RolesListResponse } from './protocols'

export const list = async ({
  config,
  params
}: RolesListRequest): Promise<RolesListResponse> => {
  return await Http.fetch<RolesListResponse>('/v1/roles', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
