const textInput = document.querySelector("#text-input");
const formLayout = document.querySelector("#form-layout");
// textInput.addEventListener("change", (e) => {
//   criptoinit(e.currentTarget.value);
// });

formLayout.onsubmit = function (e) {
  e.preventDefault();
  criptoinit(textInput.value);
};
const gabarito = "ABCDEFGHIJKLMNOQRSTUVWXYZ";

const gabaritoFINAL = [
  "A = 1",
  "B = 2",
  "C = 3",
  "D = 4",
  "E = 5",
  "F = 6",
  "G = 7",
  "H = 8",
  "I = 9",
  "J = 10",
  "K = 11",
  "L = 12",
  "M = 13",
  "N = 14",
  "O = 15",
  "P = 16",
  "Q = 17",
  "R = 18",
  "S = 19",
  "T = 20",
  "U = 21",
  "V = 22",
  "W = 23",
  "X = 24",
  "Y = 25",
  "Z = 26",
];

function criptoinit(message) {
  message = message.toUpperCase();
  let result = [];

  let resultPost = 0;
  let resultPre = 0;
  count = 1;

  for (var i = 1; i <= message.length; i++) {
    for (var j = 1; j <= gabarito.length; j++) {
      if (message.charAt(i - 1) === gabarito.charAt(j - 1)) {
        if (count % 2 === 1) {
          resultPost = j;
          if (resultPre.toString().length === 1) {
            resultPre = ("0" + resultPre.toString()).toString();
          }
          if (resultPost.toString().length === 1) {
            resultPost = ("0" + resultPost.toString()).toString();
          }
          result.push(resultPre + ":" + resultPost);
        } else {
          resultPre = j;

          if (resultPre.toString().length === 1) {
            resultPre = ("0" + resultPre.toString()).toString();
          }
          result.push(resultPost + ":" + resultPre);
        }

        count++;
      }
    }
  }

  let results = [];

  for (let index = 1; index <= result.length; index++) {
    if (result.length % 2 === 0) {
      if (index % 2 === 0) {
        results.push(result[index - 1]);
      }
      // else {

      // }
    } else {
      if (index % 2 === 1) {
        results.push(result[index - 1]);
      }
    }
  }

  // Update header text
  textToHtml(message, results);
  document.querySelector("#header").innerHTML = message;
  document.querySelector("#main").innerHTML = results.join(", ");
}

function textToHtml(message, result) {
  document.querySelector("#header").innerHTML = message;
  document.querySelector("#main").innerHTML = result;
}
criptoinit("TEXTO");
document.querySelector("#footer").innerHTML = gabaritoFINAL.join(", ");
