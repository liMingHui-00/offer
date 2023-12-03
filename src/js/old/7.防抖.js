let timerId = null;
function name() {
  if (timerId != null) {
    clearInterval(timerId);
  }
  timerId = setTimeout(() => {
    console.log("我是防抖" + new Date().getTime());
  }, 100);
}
for (let index = 0; index < 5; index++) {
  name();
}
