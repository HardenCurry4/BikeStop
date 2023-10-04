import Swal from "sweetalert2";
import { frasesDespedida } from '../data/frasesDespedida'

export const deleteUser = () => {

    const fraseAleatoria = frasesDespedida[Math.floor(Math.random() * frasesDespedida.length)];

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Esta Seguro?',
        text: "se eliminara su cuenta y todos sus datos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminada!',
            fraseAleatoria,            
            'error'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Ufff por poco :)',
            'success'
          )
        }
      })

}
