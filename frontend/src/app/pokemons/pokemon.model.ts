export class Pokemon {
    constructor(
      public name: string,
      public elem_type: string,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }