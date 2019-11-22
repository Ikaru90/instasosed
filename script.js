setInterval(() => {
  const elements = document.getElementsByClassName('_9AhH0');
  for (let item of elements) {
    item.parentNode.removeChild(item);
  }
}, 500);
