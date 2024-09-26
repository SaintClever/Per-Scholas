// Types of consoles
console.log("log: Hello World!");
console.info("info: Console info");
console.warn("warn: Danger Will Robinson!!!");
console.debug("debug: Debugging");
console.error("error: Code Red!!!");
console.table({"name": "Saint. Clever", "number": 15});
console.log();

let myTrace = () => console.trace("The console.trace looks like console.error but scarier!");
let callTrace = () => myTrace();
callTrace();
console.log();

// NOTE: the time and timeEnd MUST have the same value within your parathesis
console.time("timer");
console.log("processing code");
console.timeEnd("timer");
console.log();


let helloWorld = ["Hello", "World!"]
let message = `${helloWorld[0]} ${helloWorld[1]}`;
console.log(message);
