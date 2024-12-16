import { Http } from '@/lib/http'
import type { IssueUpdateRequest, IssueUpdateResponse } from './protocols'

export const update = async ({
  config,
  body,
  id
}: IssueUpdateRequest): Promise<IssueUpdateResponse> => {
  return await Http.fetch<IssueUpdateResponse>(`/v1/issues/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    body: JSON.stringify(body),
    ...config.options
  })
}
