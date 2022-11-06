var DataBase = document.getElementById("input-id").value;
var NickNameInput = document.getElementById("input-id1").value;
var Button = document.getElementById("buttonSumbit");

async function postData(url = '', data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    });
  }

function NickGenerator(nick) {
    var NumbersForNick = Math.floor(Math.random() * 999999999);
    return nick + String(NumbersForNick);
}

function MailGenerator(nick) {
    var NumbersForNick = Math.floor(Math.random() * 9991);
    return nick + String(NumbersForNick) + "@gmail.com";
}

Button.onclick = async function() {
    DataBase = document.getElementById("input-id").value + "accounts/registerGJAccount.php";
    NickNameInput = document.getElementById("input-id1").value;
    var NickUser = NickGenerator(NickNameInput);
    var Password = "fhjskhe!NM!";

    let body = []

    const data = {
        "userName": NickUser,
        "email": String(MailGenerator(NickUser)),
        "password": Password,
        "secret": "Wmfv3899gc9"
    };

    for (let property in data) {
        let key = encodeURIComponent(property);
        let value = encodeURIComponent(data[property]);
        body.push(`${key}=${value}`);
    }

    body = body.join("&");

    await postData(String(DataBase), body);
    console.log(NickUser);
    console.log(Password);
};