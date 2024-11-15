class Observer {
    constructor () {
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer)
    };

    notify(data){
        this.observers.forEach(observer => observer(data))
    };
}

const observer = new Observer();
const toast = (data) => console.log('Toast: ' + data);
const notification = (data) => console.log('Notification: ' + data);

observer.subscribe(toast);
observer.subscribe(notification);