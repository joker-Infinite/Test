function cookieSet(key, data) {
  document.cookie = key + '=' + data;
}

function cookieGet() {
  let c = document.cookie;
  console.log(c);
}
