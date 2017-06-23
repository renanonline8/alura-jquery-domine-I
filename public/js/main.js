var frase = $('.frase').text();
var arrayFrase = frase.split(" ");
var numPalavras = arrayFrase.length;

$('#num_palavras').text(numPalavras);

//Ao digitar, contar palavas e caracter
var campo = $('.campo-digitacao');
campo.on('input', function(){
    var numPalavras = (((campo.val()).split(/\S+/)).length) - 1;
    var numCaracteres = (campo.val()).length;
    $('#contador-caracteres').text(numCaracteres);
    $('#contador-palavras').text(numPalavras);
});

var rotuloTempo = $('#tempo-digitacao');
var tempoRestante = rotuloTempo.text();
campo.one('focus', function(){
    var cronoID = setInterval(function(){
        tempoRestante--;
        rotuloTempo.text(tempoRestante);
        if (tempoRestante <= 0) {
            clearInterval(cronoID);
            campo.attr('disabled',true);
        }
    },1000)
});