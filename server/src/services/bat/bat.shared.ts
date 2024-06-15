// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Bat, BatData, BatPatch, BatQuery, BatService } from './bat.class'

export type { Bat, BatData, BatPatch, BatQuery }

export type BatClientService = Pick<BatService<Params<BatQuery>>, (typeof batMethods)[number]>

export const batPath = 'bat'

export const batMethods: Array<keyof BatService> = ['find', 'get', 'create', 'patch', 'remove']

export const batClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(batPath, connection.service(batPath), {
    methods: batMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [batPath]: BatClientService
  }
}
