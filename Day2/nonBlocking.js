// Non-blocking: Code starts a task and continues without waiting
console.log("Start");

setTimeout(() => {
  console.log("Task done");
}, 5000);

console.log("End");