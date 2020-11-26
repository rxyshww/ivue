import { reactive } from "../src";

let data = {
    a: 1,
    b: {
        c: 2
    }
};

let obj = reactive(data);

console.log(obj.a);
console.log(obj.b);
obj.a = 2;
console.log(obj.a);
