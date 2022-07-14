const alertEliminar = () => {
    Swal.fire({
        title: '¿Estas seguro de eliminar del carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Tu compra se elimino del carrito',
            'success'
          )
        }
      })
 }


