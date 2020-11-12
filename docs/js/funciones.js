/*  variables globales */

var opcionJugador

/* funciones globales */

function ponerTitulo(titulo) {
    $('.caja-titulo').html('<i>' + titulo + '</i>')
}

function imprimirResultado(resultado) {
    $('.caja-resultado').html('<i>' + resultado + '</i>')

    var resultadoColor = {
        'empataste': 'yellow',
        '¡ganaste!': 'limegreen',
        'perdiste': 'red'
    }
    var color = resultadoColor[resultado]

    $('.caja-resultado').css('color', color ? color : '')
}

function imprimirImagen(id, img) {
    $('#' + id).attr('src', img ? 'img/' + img + '.png' : '')
}

function configurarSelectorJugador() {
    opcionJugador = 'piedra'
    imprimirImagen('img-jugador', opcionJugador)
    $('select').change(cambioOpcionJugador)

    function cambioOpcionJugador() {
        console.log('cambioOpcionJugador')
        opcionJugador = $('select').val()
        imprimirImagen('img-jugador', opcionJugador)
        imprimirResultado('jugar')
    }
}
function configurarBotonJugar() {
    $('button').click(jugar)
    function jugar() {
        console.log('jugar')

        var opcionComputadora = sortear()
        imprimirImagen('img-computadora', opcionComputadora)

        var resultado = obtenerResultado(opcionComputadora, opcionJugador)
        imprimirResultado(resultado)
    }
}
function sortear() {
    var random = Math.random()    // 0 - 0.9999999...
    random *= 3     // queda entre 0 y 2.99999
    random = parseInt(random)    // le saca los decimales (0= piedra , 1=papel y 2=tijera)
    var opciones = ['piedra', 'papel', 'tijera']
    return opciones[random]
}
function obtenerResultado(oc, oj) {
    var res = 'empataste'

    switch (oc) {
        case 'piedra':
            if (oj == 'papel') res = '¡ganaste!'
            else if (oj == 'tijera') res = 'perdiste'
            break
        case 'papel':
            if (oj == 'tijera') res = '¡ganaste!'
            else if (oj == 'piedra') res = 'perdiste'
            break
        case 'tijera':
            if (oj == 'piedra') res = '¡ganaste!'
            else if (oj == 'papel') res = 'perdiste'
            break
    }

    return res
}
function start() {
    var titulo = "Piedra, papel o tijera"
    console.log(titulo)

    ponerTitulo('PIEDRA, PAPEL O TIJERA')
    configurarSelectorJugador()
    configurarBotonJugar()

    imprimirResultado('Por favor, elegí la opción de jugar')
}

/* ejecuciones */

$(document).ready(start)