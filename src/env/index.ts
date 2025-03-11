import { clientEnv } from './client'
import { serverEnv } from './server'
import { sharedEnv } from './shared'

export const env = {
  ...clientEnv,
  ...serverEnv,
  ...sharedEnv,
}
