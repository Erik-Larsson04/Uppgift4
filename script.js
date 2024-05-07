
let input1Element;
let input2Element;
let resultElement;


function init(){
    input1Element=document.getElementById("input1");
    input2Element=document.getElementById("input2");
    resultElement=document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
}
window.onload=init;

function doCalculations(){
    let length;
    let width;
    let area;
    let distance;
    let unit = ["steg", "fot", "tum"];
    let conv = [90,30.48,2.54];
   

    length = Number(input1Element.value) * 1.5;
    width = Number(input2Element.value) + 3;
    area = length * width;
    resultElement.innerHTML += "<p>Rektangelns area blir " + area + "m<sup>2</sup> om bredden ökar med 3 meter och längden med 50%.</p>";


    area = 3.14159 * length * width / 4;
    resultElement.innerHTML += "<p>Elipsens area blir " + area + "m<sup>2</sup>.</p>";


    resultElement.innerHTML += "<p>Längden " + length + " meter blir:</p>"
    distance = length / conv[0] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[0] + "</p>";
    distance = length / conv[1] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
    distance = length / conv[2] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";


    length = Number(input1Element.value);
    width = Number(input2Element.value);
    area = (length * width)/2;
    area = area / conv[2] * 100;
    resultElement.innerHTML += "<p>Triangelns area blir " + area + "fot<sup>2</sup>.</p>";



}