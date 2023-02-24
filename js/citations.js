
const citations = [];

let c1 = "\“You see, but you do not observe.\”<br><br>-Arthur Conan Doyle, Sherlock";
let c2 = "\“It is a capital mistake to theorize before one has data.\”<br><br>-Arthur Conan Doyle, Sherlock";
let c3 = "\“When you have eliminated the impossible, whatever remains, however improbable, must be the truth?\” <br><br>”-Arthur Conan Doyle, Sherlock";
let c4 = "\“To a great mind, nothing is little.\”  <br><br> -Arthur Conan Doyle, Sherlock";
let c5 = "\“My name is Sherlock Holmes. It is my business to know what other people do not know.\”  <br><br> -Arthur Conan Doyle, Sherlock";
let c6 = "\“There is nothing more deceptive than an obvious fact.\” <br><br> -Arthur Conan Doyle, Sherlock";
let c7 = "\“But it is better to learn wisdom late than never learn it at all.\” <br><br> -Arthur Conan Doyle, Sherlock";
let c8 = "\“What you do in this world is a matter of no consequence. The question is what can you make people believe you have done.\” <br><br> -Arthur Conan Doyle, Sherlock";
let c9 = "\“There is nothing more stimulating than a case where everything goes against you.\” <br><br> -Arthur Conan Doyle, Sherlock";
let c10 = "\“The world is full of obvious things which nobody by any chance ever observes.\” <br><br> -Arthur Conan Doyle, Sherlock";
let c11 = "\“It often seems to me that's all detective work is, wiping out your false starts and beginning again.\” <br><br> -Agatha Christie";
let c12 = "\“I am not the law, but I represent justice so far as my feeble powers go.\” <br><br> -Arthur Conan Doyle, Sherlock";

citations.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12);



function showQuote() {

    let random = Math.floor(Math.random() * citations.length); 
    document.getElementById("citation").innerHTML = citations[random];
}

showQuote();
