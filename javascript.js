const container= document.querySelector('#container');
container.className+= " d-flex flex-row justify-content-center"
function rowel(ss){

    const container= document.querySelector('#container');
    container.className+= " d-flex flex-row justify-content-center"
 for(i=0;i<ss;i++){

    const col = document.createElement('col');
    col.classList.add=('div');
    col.id="box";

    col.className = "card-group display-1 d-flex flex-column hover-overlay";
    container.appendChild(col);
    for(j=0;j<ss;j++){
        const fila = document.createElement('div')
        fila.classList.add=('div');
        fila.id='i'+i+'j'+j;
        fila.style="height:"+30/ss+"rem; width:"+30/ss+"rem;"
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

var ss=document.getElementById('customRange').value;
var sc='r';
let arr= [255,0,0];
var step=50;
var ind = 1;

// desde aqui sera crear la funcion para pintar con clik
function colorear(){
         if(click){
            this.style.backgroundColor=color;
            scolor(ind);
            

   }
}
function clear(){
   var del=document.getElementById('container')
   del.remove();
   const container=document.createElement('div');
   container.id='container';
   const id= document.querySelector('#id');
   id.appendChild(container);
   rowel(ss);
   color=scolor(1);
   colorear();
}

const range = document.querySelector('#customRange')
range.oninput = () => ss=document.getElementById('customRange').value;


const btn1 = document.querySelector('#btn1')
btn1.onclick=() =>clear();

const btn2 = document.querySelector('#btn2')
btn2.onclick=()=>ind=1;
const btn3 = document.querySelector('#btn3')
btn3.onclick=()=>ind=2;

const fav= document.querySelector('#favcolor')
fav.oninput=() =>ind=3;

function trans(){
   var str='rgb'
   var i=str.indexOf(sc);
   var j=(i+1)%3;
   var k=(j+1)%3;
   if(arr[i]<=510){
      arr[i]=arr[i]+1;
      if(arr[i]>510){
         arr[i]=255;
         arr[j]=0;
         arr[k]=0;
         sc=str.charAt((j));
      }
   }
   color="rgb("+arr[0]+","+arr[1]+","+arr[2]+")";
   
  
   
}
function scolor(i){
  
   if(i==1){
      color='black';
   }
   if(i==2){
      trans();
   }
   if(i==3){
      color=document.getElementById('favcolor').value;
   }
   }






colorear();
rowel(ss);