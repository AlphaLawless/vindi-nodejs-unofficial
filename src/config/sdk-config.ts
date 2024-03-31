export class SDKConfig {
  static readonly API_ENDPOINT_PROD = 'https://app.vindi.com.br/api'
  static readonly API_ENDPOINT_SANDBOX = 'https://sandbox-app.vindi.com.br/api'
  static readonly MEDIA_TYPE = 'application/vnd.api+json'

  static readonly SDK_VERSION = '0.0.1'

  static readonly Headers = {
    AUTHORIZATION: 'Authorization',
    ACCEPT: 'Accept',
    CONTENT_TYPE: 'Content-Type',
    USER_AGENT: 'User-Agent',
    IDEMPOTENCY_KEY: 'X-Idempotency-Key'
  }

  static getApiEndpoint(sandbox = false): string | URL {
    if (sandbox) return SDKConfig.API_ENDPOINT_SANDBOX

    return SDKConfig.API_ENDPOINT_PROD
  }

  static getNodeVersion(): string {
    return process.version
  }

  static getNodeArchitecture(): string {
    return process.arch
  }

  static getNodePlataform(): string {
    return process.platform
  }

  static getUserAgent(): string {
    return `Vindi NodeJS SDK v${
      SDKConfig.SDK_VERSION
    } (node ${SDKConfig.getNodeVersion()} - ${SDKConfig.getNodeArchitecture()} - ${SDKConfig.getNodePlataform()})`
  }
}
