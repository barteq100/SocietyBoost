interface IFeedService<T> {
    loadState(userId: string): Promise<Array<T>>;
    refeshState(): Promise<Array<T>>;
  }