"use strict";
var ProviderEventManager = /** @class */ (function () {
    function ProviderEventManager() {
        this.observerEventListeners = [];
    }
    ProviderEventManager.prototype.attach = function (observerEventListener) {
        this.observerEventListeners.push(observerEventListener);
    };
    ProviderEventManager.prototype.detach = function (observerEventListener) {
        var index = this.observerEventListeners.indexOf(observerEventListener);
        if (index !== -1) {
            this.observerEventListeners.splice(index, 1);
        }
    };
    ProviderEventManager.prototype.notify = function () {
        for (var _i = 0, _a = this.observerEventListeners; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return ProviderEventManager;
}());
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (providerEventManager) {
        console.log("ConcreteObserverA: Reacted to the event.");
    };
    return ConcreteObserverA;
}());
var subject = new ProviderEventManager();
var observer1 = new ConcreteObserverA();
subject.attach(observer1);
subject.notify();
