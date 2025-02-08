$(document).ready(function(){
    const Form = ('.Form')
    $('#carousel-imagens').slick({
        autoplay:true
    })
    $('.menu-burger').click(function() {
        $('nav').slideToggle();
        console.log('working')
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '__/__/__'
    })
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insera o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
    $('.List-Vehicles button').click(function(){
        const destino = $('#contato');

        const NomeVehicle = $(this).parent().find('h3').text();

        $('#veiculo').val(NomeVehicle);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000
    )
    })
})