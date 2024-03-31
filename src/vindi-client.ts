import type { InitialOptions, Options } from './protocols'

/**
 * Vindi SDK Node.
 *
 * @see {@link https://github.com/alphalawless/vindi-nodejs-unofficial Documentation }.
 */
export class VindiClient {
  key: string
  options?: Options

  constructor(initial: InitialOptions) {
    this.key = initial.key
    this.options = initial.options
  }
}
