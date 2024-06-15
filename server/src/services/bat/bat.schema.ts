// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { BatService } from './bat.class'

// Main data model schema
export const batSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Bat', additionalProperties: false }
)
export type Bat = Static<typeof batSchema>
export const batValidator = getValidator(batSchema, dataValidator)
export const batResolver = resolve<Bat, HookContext<BatService>>({})

export const batExternalResolver = resolve<Bat, HookContext<BatService>>({})

// Schema for creating new entries
export const batDataSchema = Type.Pick(batSchema, ['text'], {
  $id: 'BatData'
})
export type BatData = Static<typeof batDataSchema>
export const batDataValidator = getValidator(batDataSchema, dataValidator)
export const batDataResolver = resolve<Bat, HookContext<BatService>>({})

// Schema for updating existing entries
export const batPatchSchema = Type.Partial(batSchema, {
  $id: 'BatPatch'
})
export type BatPatch = Static<typeof batPatchSchema>
export const batPatchValidator = getValidator(batPatchSchema, dataValidator)
export const batPatchResolver = resolve<Bat, HookContext<BatService>>({})

// Schema for allowed query properties
export const batQueryProperties = Type.Pick(batSchema, ['id', 'text'])
export const batQuerySchema = Type.Intersect(
  [
    querySyntax(batQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type BatQuery = Static<typeof batQuerySchema>
export const batQueryValidator = getValidator(batQuerySchema, queryValidator)
export const batQueryResolver = resolve<BatQuery, HookContext<BatService>>({})
