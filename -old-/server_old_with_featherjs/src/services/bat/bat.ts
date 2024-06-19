// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  batDataValidator,
  batPatchValidator,
  batQueryValidator,
  batResolver,
  batExternalResolver,
  batDataResolver,
  batPatchResolver,
  batQueryResolver
} from './bat.schema'

import type { Application } from '../../declarations'
import { BatService, getOptions } from './bat.class'
import { batPath, batMethods } from './bat.shared'

export * from './bat.class'
export * from './bat.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const bat = (app: Application) => {
  // Register our service on the Feathers application
  app.use(batPath, new BatService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: batMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(batPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(batExternalResolver), schemaHooks.resolveResult(batResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(batQueryValidator), schemaHooks.resolveQuery(batQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(batDataValidator), schemaHooks.resolveData(batDataResolver)],
      patch: [schemaHooks.validateData(batPatchValidator), schemaHooks.resolveData(batPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [batPath]: BatService
  }
}
