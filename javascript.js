const container= document.querySelector('#container');
container.className+= " d-flex flex-row"
function rowel(fila, columna){
 for(i=0;i<fila;i++){

const col = document.createElement('col');

col.classList.add=('col');
col.className = "container display-1 d-flex flex-column";
container.appendChild(col);
for(j=0;j<columna;j++){
    const fila = document.createElement('fil')
    fila.classList.add=('fil');
    fila.id='c'+i+j;
    fila.className = "container display-1";
    fila.textContent+= "texto "+i+" "+j;
    col.appendChild(fila)


}

 }
}

rowel(4,4);