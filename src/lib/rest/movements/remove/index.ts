import { Http } from '@/lib/http'
import type {
  MovementExcludeRequest,
  MovementExcludeResponse
} from './protocols'

export const exclude = async ({
  config,
  id
}: MovementExcludeRequest): Promise<MovementExcludeResponse> => {
  return await Http.fetch<MovementExcludeResponse>(`/v1/movements/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
