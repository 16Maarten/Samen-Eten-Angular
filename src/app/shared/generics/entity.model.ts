/**
 * Base class for all entities that are part of communication to/from services.
 */
 export abstract class Entity {
    readonly _id!: number | string | undefined;
  
    constructor(values: any) {
      this._id = values ? values._id : undefined;
    }
  }
  