function validation() {
     var valid = true;
     var formlabels = document.getElementsByTagName("label");
     var firstname = document.getElementById("name").value;
     var email = document.getElementById("email").value;
    
     
     for (var i = 0; i < formlabels.length; i++) {
     formlabels[i].innerHTML = "";
     }
    
     if (firstname == "") {
     formlabels[0].innerHTML = "Name: * [required]";
     formlabels[0].style.color = "red";
     valid = false;
     } else if (!isNaN(firstname)) {
     formlabels[0].innerHTML = "Name: * [text only]";
     formlabels[0].style.color = "red";
     valid = false;
     }else{
        formlabels[0].innerHTML = "Name: * ";
        formlabels[0].style.color = "black";
     }
    
     
    var re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email == "") {
     formlabels[1].innerHTML = "Email: * [required]";
     formlabels[1].style.color = "red";
     valid = false;
     } else if (!re.test(email)) {
     formlabels[1].innerHTML = "Email: * [invalid email]";
     formlabels[1].style.color = "red";
    valid = false;
     }else{
        formlabels[1].innerHTML = "Email: * ";
        formlabels[1].style.color="black";
        valid = true;
         }
    
  return valid;
    }