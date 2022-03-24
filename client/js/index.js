console.log("TESTEEEEE")
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log("Campos",campos);

document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault();
    
    tr = document.createElement('tr');
    campos.forEach(function(campo){
        td = document.createElement('td');
        td.textContent = campo.value;

        tr.appendChild(td);
    })

    var tdVolume = document.createElement('td')
    tdVolume.textContent = (campos[1].value * campos[2].value);

    tr.appendChild(tdVolume);

    document.querySelector('.table tbody').appendChild(tr)

    campos[0] = "";
    campos[1] = 1;
    campos[2] = 0;

})