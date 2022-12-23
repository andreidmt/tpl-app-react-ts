declare global {
  type Morphism<I, O> = (...input: I) => O;
  type UnaryMorphism<I, O> = (input: I) => O;

  type Predicate<I> = (...input: I) => boolean;
  type UnaryPredicate<I> = (input: I) => boolean;
}

export {}
