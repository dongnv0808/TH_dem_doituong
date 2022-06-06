"use strict";
class Application {
    constructor(name) {
        this.name = name;
        Application.count++;
    }
}
Application.count = 0;
console.log(Application.count);
let app1 = new Application("Hello1");
console.log(Application.count);
let app2 = new Application("Hello2");
console.log(Application.count);
let app3 = new Application("Hello3");
console.log(Application.count);
