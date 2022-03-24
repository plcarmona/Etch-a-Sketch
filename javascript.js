const container= document.querySelector('#container');
container.className+= " d-flex flex-row justify-content-center"

function rowel(filaa, columna){
 for(i=0;i<filaa;i++){

    const col = document.createElement('col');

    col.classList.add=('div');

    col.className = "card-group display-1 d-flex flex-column hover-overlay";
    container.appendChild(col);
    for(j=0;j<columna;j++){
        const fila = document.createElement('div')
        fila.classList.add=('div');
        fila.id='i'+i+'j'+j;
        fila.style="height:"+30/filaa+"rem; width:"+30/columna+"rem;"
        fila.style.backgroundColor='white';
        const sel = document.getElementById('i'+i+'j'+j);
        fila.addEventListener('mouseenter', colorear);
       //  fila.addEventListener('mouseenter', ()=> fila.style.backgroundColor = "rgba(255,255,255)"  );
        col.appendChild(fila);
    }
 }
}

let click=false;


document.querySelector('body').addEventListener('mousedown', 
()=> click= true
);
document.querySelector('body').addEventListener('mouseup', 
()=> click= false
);

let filas=50;
let columna=50;
rowel(filas,columna);
// desde aqui sera crear la funcion para pintar con clik
function colorear(){
   for(i=0;i<filas;i++){
      for(j=0;j<columna;j++){
         if(click){
            this.addEventListener('mouseover',
            this.style.backgroundColor='black');
            this.addEventListener('click',
            this.style.backgroundColor='black');
         }
      }
   }
}
colorear();