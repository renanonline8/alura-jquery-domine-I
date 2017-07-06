var campo = $('.campo-digitacao');
var tempoInicial = $('#tempo-digitacao').text();

$(function(){
    iniciaFrase();
    contaPalavras();
    contaTempo();
    $('#reinicia-jogo').click(function(){
        reiniciaJogo();
        contaTempo();
    });
    iniciarMarcador();
});

function iniciaFrase() {
    var frase = $('.frase').text();
    var arrayFrase = frase.split(" ");
    var numPalavras = arrayFrase.length;

    $('#num_palavras').text(numPalavras);
}

function contaPalavras(){
    //Ao digitar, contar palavas e caracter
    campo.on('input', function(){
        var numPalavras = (((campo.val()).split(/\S+/)).length) - 1;
        var numCaracteres = (campo.val()).length;
        $('#contador-caracteres').text(numCaracteres);
        $('#contador-palavras').text(numPalavras);
    });
}

function contaTempo() {
    var rotuloTempo = $('#tempo-digitacao');
    var tempoRestante = tempoInicial;
    campo.one('focus', function(){
        var cronoID = setInterval(function(){
            tempoRestante--;
            rotuloTempo.text(tempoRestante);
            if (tempoRestante <= 0) {
                clearInterval(cronoID);
                campo.attr('disabled',true);
                campo.addClass('campo-desativado');
                campo.removeClass('borda-verde borda-vermelha');
            }
        },1000)
    });
}

function reiniciaJogo(){
    campo.attr('disabled', false).val('');
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $('#num_palavras').text('0');
    $('#tempo-digitacao').text(tempoInicial);
    campo.removeClass('campo-desativado');
}

function iniciarMarcador(){
    var frase = $('.frase').text();
    campo.on('input', function(){
        var digitado = $('.campo-digitacao').val();
        var comparar = frase.substr(0, digitado.length);
        if (digitado == comparar){
            campo.addClass('borda-verde').removeClass('borda-vermelha');
        } else {
            campo.addClass('borda-vermelha').removeClass('borda-verde');
        }
    })
}