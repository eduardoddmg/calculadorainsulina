function resultado() {
    var input1 = document.getElementById('1').value;
    var input2 = document.getElementById('2').value;
    var input3 = document.getElementById('3').value;
    var input4 = document.getElementById('4').value;
    
    var resultado = (parseInt(input1) + parseInt(input2) + parseInt(input3)) * parseInt(input4);

    var frasco = resultado/1000;

    document.getElementById('span1').innerHTML = resultado + " UI";

    if (frasco <= 1) {
        document.getElementById('span2').innerHTML = "1";
    } else if (frasco > 1) {
        document.getElementById('span2').innerHTML = frasco + 1;
    }
}