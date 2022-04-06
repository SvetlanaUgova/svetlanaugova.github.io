//var CryptoJS = require("crypto-js");
//var axios = require("axios");

var login = "116448";
var time = Math.floor(Date.now() / 1000);
var secret = "JalPRClXtArX6tDUkU26WvVXFSWrgRjuCbZAW0w4561Avw9i38";
var data = JSON.stringify({
  timeout: 30,
  ops: [{ conv_id: 904246, type: "create", obj: "task", data: {"param": "1"} }]
});

var signature = CryptoJS.enc.Hex.stringify(
  CryptoJS.SHA1(time + secret + data + secret)
);
const url = `https://sync-api.corezoid.com/api/1/json/${login}/${time}/${signature}`;

console.log(url)

const axiosConfig = {
  mode: 'no-cors',
  method: 'POST',
  	headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
}

async function makeGetRequest() {
  let res = await axios.post(url, data, axiosConfig);
  let d = res.data;
  console.log(d);
}

makeGetRequest();