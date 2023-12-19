let counter = document.querySelectorAll("h3");
let counterArr = Array.from(counter);

counterArr.map((item) => {
  let count = 0;
  function counterUp() {
    count++;
    item.innerHTML = count;
    if (count == item.dataset.number) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(() => {
    counterUp();
  }, 100 / item.dataset.number);
});
