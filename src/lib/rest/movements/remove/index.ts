import { Http } from '@/lib/http'
import type { MovementRemoveRequest, MovementRemoveResponse } from './protocols'

export const remove = async ({
  config,
  id
}: MovementRemoveRequest): Promise<MovementRemoveResponse> => {
  return await Http.fetch<MovementRemoveResponse>(`/v1/movements/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
