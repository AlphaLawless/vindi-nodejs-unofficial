import { Http } from '@/lib/http'
import type { ChargeRemoveRequest, ChargeRemoveResponse } from './protocols'

export const remove = async ({
  config,
  params,
  id
}: ChargeRemoveRequest): Promise<ChargeRemoveResponse> => {
  return await Http.fetch<ChargeRemoveResponse>(`/v1/charges/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
