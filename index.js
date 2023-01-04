const QRCode = require("qrcode");
let img = document.getElementById("img");
let url = document.getElementById("url");
let name = document.getElementById("name");
let displayName = document.getElementById("displayName");
let create = document.getElementById("create");

function onGenerate() {
  QRCode.toDataURL(`${url.value}/${name.value}`, { margin: 1, scale: 10 })
    .then(url => {
      console.log(url);
      img.src = url;
      displayName.innerText = name.value;
    })
    .catch(err => console.error(err));
}

create.addEventListener("click", onGenerate);
