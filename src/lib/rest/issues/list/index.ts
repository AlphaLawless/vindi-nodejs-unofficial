import { Http } from '@/lib/http'
import type { IssueListRequest, IssueListResponse } from './protocols'

export const list = async ({
  config,
  params
}: IssueListRequest): Promise<IssueListResponse> => {
  return await Http.fetch<IssueListResponse>('/v1/issues', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
