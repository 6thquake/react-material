const throttling = (fn, wait, maxTimeLong) => {
    wait = wait || 100;
    maxTimeLong = maxTimeLong || 300;
    let timeout = null;
    let start = new Date();
    return function(e) {
      if (timeout) {
        clearTimeout(timeout);
      }
      let now = new Date();
      if (now - start >= maxTimeLong) {
        fn(e);
        start = now;
      } else {
        timeout = setTimeout(e => fn(e), wait);
      }
    };
  };
  export default throttling;