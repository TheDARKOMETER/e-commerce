export const NOTIF_CART_CHANGED = "notif_cart_changed"

let instance = null;
var observers = {};
class NotificationService {
    constructor() {
        // This implementation of singleton is wrong, revise it
        return !instance ? this : instance
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for (var x = 0; x < obs.length; x++) {
            var obj = obs[x];
            obj.callBack(data);
        }
    }


    addObserver = (notifName, callBack) => {
        let obs = observers[notifName];
        if (!obs) {
            observers[notifName] = [];
        }

        let obj = { callBack: callBack };
        observers[notifName].push(obj);
    }

    removeObserver = (notifName, callBack) => {
        let obs = observers[notifName];
        if (obs) {
            let index = obs.findIndex((obj) => obj.callBack === callBack);
            if (index !== -1) {
                obs.splice(index, 1);
                observers[notifName] = obs
            }
        }
    }
}

export default NotificationService;