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

class ConcreteObserverA implements IObserverEventListener {
  update(providerEventManager: IProviderEventManager): void {
    console.log("ConcreteObserverA: Reacted to the event.");
  }
}

const subject = new ProviderEventManager();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);
subject.notify();
