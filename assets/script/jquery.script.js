jQuery.fn.parpadea = function () {
    var veces = 2000
    var contador = 0

    this.each(function () {
        var intervalo = setInterval(() => {
            contador++
            if (contador < veces){
                elem = $(this)
                elem.fadeOut(25, function () {
                $(this).fadeIn(25)
                })
            }
            else{
                $(this).fadeIn(250)
            }
                
        })
    })
    return this
}