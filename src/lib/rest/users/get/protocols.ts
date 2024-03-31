import type { ApiResponse, Options } from '@/protocols'
import type VindiClient from '../../../..'
import type { UserCurrentReturn } from '../protocols'

export declare interface UserCurrentGetRequest
  extends Exclude<UserCurrentGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface UserCurrentGetData {
  requestOptions?: Options
}

export declare interface UserCurrentGetResponse extends ApiResponse {
  user: UserCurrentReturn
}
