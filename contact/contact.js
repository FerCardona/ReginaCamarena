function sendMail(params) {
    const nme =  document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const tel =  document.getElementById("telephone").value;
    const msge = document.getElementById("message").value;
  
    if((nme !=="") && (mail !=="") && (tel !=="")
         && (msge !=="")) {
      var tempParams ={
          name: nme,
          email: mail,
          telephone: tel,
          message: msge      
      };
    
    emailjs.send('service_y9f96ny','template_cw77zel',tempParams)
    .then(function(res){
      console.log("success", res.status);
      if (res.status == 200) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telephone").value = "";
        document.querySelector("#message").value = "";
      } 
      console.log("success", res.status);
    }) 
    .then((message) => alert("email enviado exitosamente"));
        }
  };