var dt = new Date();
var dateTime = document.querySelectorAll('.datetime');

for (i = 0; i < dateTime.length; i++) {
dateTime[i].innerHTML = dt.toLocaleDateString(); 
}