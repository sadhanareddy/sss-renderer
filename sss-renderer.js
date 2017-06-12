var url = document.getElementsByTagName("input").value;
alert(url);
// function getSSS(){
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("POST", "//localhost:5000/getSSS", true); 
//   xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
//   xhttp.send(JSON.stringify({ "url": url }));
//   xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementsByTagName("body")[0].innerHTML = this.responseText;
// 	      }
//   };
// }