import React, { useState } from 'react';
import Swal from "sweetalert2";
import { useAuthStore } from '../../hooks/useAuthStore'


export const UpdName = () => {
    const [newUsername, setNewUsername] = useState('');

    const { UpdateName } = useAuthStore();

  const ChangeName = async () => {
    const { value: nombre, isConfirmed  } = await Swal.fire({
      title: 'Cambiar nombre de usuario',
      input: 'text',
      showConfirmButton: true,
      confirmButtonText: 'aceptar',
      inputValue: newUsername, // Valor inicial del input
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar un nombre de usuario';
        }
      }
    });

    if (nombre) {
      // Aquí puedes enviar el nuevo nombre de usuario al servidor o realizar otras acciones con él
      setNewUsername(nombre);
      Swal.fire({
        title:`Su nombre cambiara a: ${nombre}`,
        showCancelButton: true});
    }

    const confirmButton = document.querySelector('.swal2-confirm');
  if (confirmButton && isConfirmed  ) {
    confirmButton.addEventListener('click', () => {
        UpdateName(nombre)
        setNewUsername('');

    });
  }

  };
  return {
    ChangeName // Exporta la función ChangeName como parte del objeto UpdName
  };
}
