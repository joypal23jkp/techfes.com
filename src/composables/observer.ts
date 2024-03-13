class Store {

}

class NotificationPublisher {
}

interface INotificationPublisher {
    subscribers: INotificationSubscriber[];
    subscribe(eventType, listener): void;
    unsubscribe(eventType, listener): void;
    notify(eventType, data)
}

interface INotificationSubscriber {
    subscribers: INotificationSubscriber[];
    subscribe(eventType, listener): void;
    unsubscribe(eventType, listener): void;
    notify(eventType, data)
}

class NotificationSubscriber {

}
