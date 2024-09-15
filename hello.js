var Bookmarknameinput = document.getElementById("Bookmarkname")

var websiteurlinput = document.getElementById("websiteurl")
var c = []
if (localStorage.getItem("datas") != null) {

   c = JSON.parse(localStorage.getItem('datas'));
   displaydatas()
}




function adddatas() {
   var objectsofdata = {
      websitename: Bookmarknameinput.value,
      websiteurl: websiteurlinput.value

   }
   c.push(objectsofdata);
   clear()


   displaydatas()
   localStorage.setItem('datas', JSON.stringify(c))

}
function clear() {
   Bookmarknameinput.Value,
   websiteurlinput.Value
}



function displaydatas() {
   var cartona = ``
   for (var i = 0; i < c.length; i++) {

      cartona += `<div style="display: flex;justify-content: space-around;background-color: white;width: 1000px;margin: auto;">
<p style="position: relative;right: 40px;">${i +1}</p>
<p style="position: relative;right: 150px;">${c[i].websitename}</p>
<p style="position: relative;right:300px;">${c[i].websiteurl}</p>
</div>`
   }
   document.getElementById('container').innerHTML = cartona;
}

