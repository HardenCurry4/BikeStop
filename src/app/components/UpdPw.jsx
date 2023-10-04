import React, { useState } from "react";
import Swal from "sweetalert2";

export const UpdPw = () => {
    const ChangePw = async () => {
        const { value: formValues } = await Swal.fire({
          title: "Cambiar Contraseña",
          html:
            '<input id="current-password" class="swal2-input" placeholder="Contraseña Actual" type="password">' +
            '<input id="new-password" class="swal2-input" placeholder="Nueva Contraseña" type="password">',
          focusConfirm: false,
          showCancelButton: true,
          preConfirm: () => {
            const currentPassword = document.getElementById("current-password").value;
            const newPassword = document.getElementById("new-password").value;

                       
            // Si las contraseñas no son iguales, devolver un objeto con las contraseñas para continuar
            return { currentPassword, newPassword };
          }
        });
    
        if (formValues && formValues.currentPassword && formValues.newPassword) {
          // Aquí deberías hacer una solicitud HTTP para cambiar la contraseña en el servidor
          // Suponiendo que la solicitud es exitosa, mostrar el cuadro de diálogo de éxito
          Swal.fire({
            title: "Contraseña cambiada",
            icon: "success",
            text: "Tu contraseña ha sido cambiada correctamente.",
            confirmButtonText: "Aceptar",
          });
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
