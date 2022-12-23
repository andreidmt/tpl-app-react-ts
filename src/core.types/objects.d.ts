declare global {
  type WithId<T> = {id: string} & T
  type PartialWithId<T> = {id: string} & Patial<T>
}

export {}
