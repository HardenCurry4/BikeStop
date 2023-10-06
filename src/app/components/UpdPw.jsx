import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "../../hooks/useAuthStore";

export const UpdPw = () => {
  const { UpdatePw } = useAuthStore();
    const ChangePw = async () => {
        const { value: formValues } = await Swal.fire({
          title: "Cambiar Contraseña",
          html:
            '<input id="current-password" class="swal2-input" placeholder="Contraseña Actual" type="password">' +
            '<input id="new-password" class="swal2-input" placeholder="Nueva Contraseña" type="password">',
          focusConfirm: false,
          showCancelButton: true,
          preConfirm: () => {
            const pw = document.getElementById("current-password").value;
            const pwupd = document.getElementById("new-password").value;

            return { pw, pwupd };
          }
        });
    
        if (formValues && formValues.pw && formValues.pwupd) {

          if (formValues.pwupd.length < 6) {
            Swal.fire({
              title: "Error",
              icon: "error",
              text: "La contraseña debe tener minimo 6 caracteres",
              confirmButtonText: "Aceptar",
            });
            
          }else{
            UpdatePw(formValues.pw, formValues.pwupd)       
          }
        } else {
          // Si el usuario cierra el cuadro de diálogo sin ingresar las contraseñas
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "Por favor, ingresa la contraseña actual y la nueva contraseña.",
            confirmButtonText: "Aceptar",
          });
        }
      };

  return {
    ChangePw // Exporta la función ChangePW como parte del objeto UpdPw
  };
  


}
