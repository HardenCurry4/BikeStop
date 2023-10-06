import Swal from 'sweetalert2';
import { useAuthStore } from "../../hooks/useAuthStore";


export const deleteUser = () => {
  const { deleteUser } = useAuthStore();

  const handleDeleteUser = () => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Por favor, ingrese su contraseña para confirmar la eliminación del usuario:',
      input: 'password',
      inputPlaceholder: 'Contraseña',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true,
      footer: "Se eliminará su cuenta y todos sus datos!"
    }).then((result) => {
      const pw = result.value;

      if (result.isConfirmed) {
        deleteUser(pw);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La eliminación del usuario ha sido cancelada.',
          'info'
        );
      }
    });
  };

  return {
    handleDeleteUser

  };

};