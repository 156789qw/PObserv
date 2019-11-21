interface IObserverEventListener {
  update(providerEventManager: IProviderEventManager): void;
}

interface IProviderEventManager {
  attach(observerEventListener: IObserverEventListener): void;
  detach(observerEventListener: IObserverEventListener): void;
  notify(): void;
}
class ProviderEventManager implements IProviderEventManager {
  private observerEventListeners: IObserverEventListener[] = [];

  attach(observerEventListener: IObserverEventListener): void {
    this.observerEventListeners.push(observerEventListener);
  }
  detach(observerEventListener: IObserverEventListener): void {
    var index = this.observerEventListeners.indexOf(observerEventListener);
    if (index !== -1) {
      this.observerEventListeners.splice(index, 1);
    }
  }
  notify(): void {
    for (const observer of this.observerEventListeners) {
      observer.update(this);
    }
  }
}
