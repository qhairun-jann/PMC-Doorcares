

  function includehtml() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      if(z[i].getAttribute("data-footer") === "year")
        console.log(z[i].innerHTML = `&copy; ${new Date().getFullYear()} Copyright by Jann Properties`)
      elmnt = z[i];
      file = elmnt.getAttribute("includehtml");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("includehtml");
            includehtml();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  };



//   Sidebar Opens
// ===================================================================
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("myOverlay").style.display = "block";
    
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    
    document.getElementById("myOverlay").style.display = "none";
}
function goBack() {
    window.history.back();
}

//  Forms Validation
// ===================================================================

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()