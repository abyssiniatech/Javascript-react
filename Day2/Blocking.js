// Blocking: Code stops everything until it finishes
console.log("Start");

function blockFor5Seconds() {
  const end = Date.now() + 5000;
  while (Date.now() < end) {} // blocks thread
}

blockFor5Seconds();

console.log("End");