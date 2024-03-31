export type OmitDeep<T, K extends keyof any> = T extends object
  ? T extends Array<infer U>
    ? Array<OmitDeep<U, K>>
    : {
        [P in keyof T as P extends K ? never : P]: OmitDeep<T[P], K>
      }
  : T
