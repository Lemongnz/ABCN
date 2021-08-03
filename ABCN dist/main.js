function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://script.google.com/macros/s/AKfycbwLDOnOQku-frBJ7eUPkEyKa1pRc9xluVyzxtGw-DkQp-SDGDZVsS21obul0tXKGcIEkw/exec");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects.data) {
            trHTML += '<tr>'; 
            trHTML += '<td>'+object['code']+'</td>';
            trHTML += '<td>'+object['name']+'</td>';
            trHTML += '<td>'+object['amount']+'</td>';
            trHTML += '<td>'+object['retail']+'</td>';
            trHTML += '<td>'+object['wholesale']+'</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
            trHTML += "</tr>";
        }
      document.getElementById("mytable").innerHTML = trHTML;
      }
    };
  }
  

loadTable(); 
// code for popUp

  
function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
  document.getElementById("popupForm").style.display = "none";
}