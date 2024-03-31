import { Http } from '@/lib/http'
import type { IssueGetRequest, IssueGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: IssueGetRequest): Promise<IssueGetResponse> => {
  return await Http.fetch<IssueGetResponse>(`/v1/issues/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
