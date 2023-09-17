import { type AuthConfig } from './auth'

export abstract class CloudServiceClient {
  static getAuthorizeUrl: () => string
  static isRetrievingToken: () => boolean
  static retrieveToken: () => Promise<void>
  static validateAccessToken: () => Promise<boolean>
  protected static shouldRefreshToken: (error: unknown) => boolean
  protected static tokenStorageKey: string
  protected static config: AuthConfig
  protected static getAccessToken: () => string
}
