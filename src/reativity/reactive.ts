import { isObject } from "../shared";

const mutableHandlers = {
    get: createGetter(),
    set: createSetter()
};

const mutableCollectionHandlers = {

};

export function reactive(target) {
    return createReactiveObject(target, mutableHandlers, mutableCollectionHandlers)
}

function createReactiveObject(target, mutableHandlers, mutableCollectionHandlers) {
    return new Proxy(target, mutableHandlers);
}


function createGetter() {
    return function (target, key, receiver) {
        let result = Reflect.get(target, key, receiver);

        if (isObject(result)) {
            return reactive(result);
        }

        return result;
    }
}


function createSetter() {
    return function (target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
    }
}

