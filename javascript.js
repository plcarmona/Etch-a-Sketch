const container= document.querySelector('#container');
container.className+= " d-flex flex-row justify-content-center"
function rowel(fila, columna){
 for(i=0;i<fila;i++){

const col = document.createElement('col');

col.classList.add=('col');

col.className = "card-group display-1 d-flex flex-column hover-overlay";
container.appendChild(col);
for(j=0;j<columna;j++){
    const fila = document.createElement('div')
    fila.classList.add=('fil');
    fila.id='c'+i+j;
    fila.className = "bg-white ";
    fila.style="height: 3rem; width: 3rem;"
    const img = document.createElement('div')
    img.className="mask";
    img.style= style="background: linear-gradient(45deg, rgba(29, 236, 197, 0.5),rgba(91, 14, 214, 0.5) 100%);";
    fila.addEventListener('mouseenter',
    ()=> fila.className="bg-primary  "
    );
    fila.addEventListener('',
    ()=> fila.className="bg-white"
    );
    col.appendChild(fila);
    fila.appendChild(img);
}

 }
}

rowel(10,10);