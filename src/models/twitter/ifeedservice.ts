interface IFeedService<T> {
    loadState(): Promise<Array<T>>;
    refeshState(): Promise<Array<T>>;
  }