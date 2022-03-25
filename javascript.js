const container= document.querySelector('#container');
container.className+= " d-flex flex-row justify-content-center"

function rowel(ss){
 for(i=0;i<ss;i++){
    const container= document.querySelector('#container');
    container.className+= " d-flex flex-row justify-content-center"

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
var sc="black";
var color="black";
var re=255;
var gr=0;
var bl=0;
var step=50;
// desde aqui sera crear la funcion para pintar con clik
function colorear(){
   for(i=0;i<ss;i++){
      for(j=0;j<ss;j++){
         if(click){
            this.addEventListener('mouseover',
            this.style.backgroundColor=scolor(2));
            

         }
      }
   }
}
function clear(){
   var del=document.getElementById('container')
   del.remove();
   const container=document.createElement('div');
   container.id='container';
   const id= document.querySelector('#id');
   id.appendChild(container);
   rowel(ss)
}

const range = document.querySelector('#customRange')
range.oninput = () => ss=document.getElementById('customRange').value;


const btn1 = document.querySelector('#btn1')
btn1.onclick=() =>clear();

const btn2 = document.querySelector('#btn2')
btn2.onclick=()=>rowel(ss);

function trans(r,g,b,step){
   if(r=255 && (b>=step&&b<=255)){
      b=b-step;
   if(r=255 && b<= step){
      b=0;
      g=g+step;
      if(g>=255){
         g=255;
      }
   }

   }
   if(g=255 && (r<=0&&r<255)){
      r=r-step;
   if(g=255 && r<=step)
      r=0;
      b=b=step;
      if(b>=255){
         b=255;
      }
   }
   if(b=255 && (g<=0&&g<255)){
      g=g-step;
   if(b=255 && g<= step){
      g=0;
      r=r+step;
      if(r>=255){
         r=255;
      }
   }
   re=r;
   gr=g;
   bl=b;

   }
   console.log(r+","+g+","+b+","+re+","+gr+","+bl)
   return "rgb("+r+","+g+","+b+")";
}
function scolor(i){
  
   if(i==1){
      color="black"
   }
   if(i==2){
      color=trans(re,gr,bl,50);
      }

      
   }






colorear();