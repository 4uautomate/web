// JavaScript Document
$(document).ready(function () {
  "use strict";

  $(".request-form").submit(function (e) {
    e.preventDefault();
    var name = $(".name");
    var email = $(".email");
    var flag = false;
    if (name.val() == "") {
      name.closest(".form-control").addClass("error");
      name.focus();
      flag = false;
      return false;
    } else {
      name.closest(".form-control").removeClass("error").addClass("success");
    }
    if (email.val() == "") {
      email.closest(".form-control").addClass("error");
      email.focus();
      flag = false;
      return false;
    } else {
      email.closest(".form-control").removeClass("error").addClass("success");
      flag = true;
    }
    var dataString = "name=" + name.val() + "&email=" + email.val();
    $(".loading").fadeIn("slow").html("Enviando...");
    $.ajax({
      type: "POST",
      data: dataString,
      url: "php/requestForm.php",
      cache: false,
      success: function (d) {
        $(".form-control").removeClass("success");
        if (d == "success")
          // Message Sent? Show the 'Thank You' message and hide the form
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#48af4b">Enviado de forma correcta.</font>')
            .delay(3000)
            .fadeOut("slow");
        else
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#ff5607">Correo no enviado.</font>')
            .delay(3000)
            .fadeOut("slow");
        document.requestform.reset();
      },
    });
    return false;
  });

  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });

  /*----------------------------------------------------*/
  /*  Request Form Validation
    /*----------------------------------------------------*/

  $(".request-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Por favor ingresa tu nombre",
      },
      email: {
        required: "Necesitamos tu correo",
        email: "Tu correo debe tener el formato nombre@dominio.com",
      },
    },
  });
});
