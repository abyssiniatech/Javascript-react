const promise1 = new Promise((resolve, reject) => {
  const res = true;

  if (res) {
    resolve("Congratulations, you are logged in ✅");
  } else {
    reject("Can't login ❌");
  }
});

promise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });