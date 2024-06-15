// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Bat, BatData, BatPatch, BatQuery } from './bat.schema'

export type { Bat, BatData, BatPatch, BatQuery }

export interface BatParams extends KnexAdapterParams<BatQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class BatService<ServiceParams extends Params = BatParams> extends KnexService<
  Bat,
  BatData,
  BatParams,
  BatPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'bat'
  }
}
