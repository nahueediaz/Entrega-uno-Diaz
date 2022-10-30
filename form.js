    //Boton comprar

    const comprarButton = document.querySelector(".form")
    comprarButton.addEventListener("submit", comprarButtonClicked)
    
// Funcion para limpiar carrito al hacer click en comprar
function comprarButtonClicked(e){
e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Felicitaciones! El pedido fue tomado',
            text: 'Le enviaremos un email con los detalles de la compra y su seguimiento.',
        })
        
        comprarButton.reset()
    }
