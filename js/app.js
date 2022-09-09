import insectos from "./data.js" ;
//variables
const cardContainer = document.querySelector('.card');
const filt = document.querySelector('#checkbox');
const divfiltro = document.querySelector('.filtros');
const divOrdenes = document.querySelector('.ordenes');
const divFamilia = document.querySelector('.family');



//eventos
window.addEventListener('DOMContentLoaded',mostrarCard(insectos))
clicks();

//funciones

function clicks(){
    filt.addEventListener('click', ()=>{
       
        //validar
        validar(filt.value);
    } )
}

function mostrarCard(datos){
    datos.forEach((data)=>{
        const {orden, familia , imagen} = data;
        generarCard(orden,familia,imagen);
        
    })
}

//generar cards
function generarCard(orden,familia,imagen){
    const card = document.createElement('div');
    const cardCont = document.createElement('div');
    cardCont.classList.add('cardContainer');
    card.classList.add('cardin');
    card.innerHTML =`
        <img src="${imagen}" alt="#">
        <h2>Orden:${orden}</h2>
        <div class = 'card_span'>
            <span>Familia:${familia}</span>
            <button class = 'ver_mas'>Ver más</button>
        </div>
        
    `
    cardCont.appendChild(card);
    cardContainer.appendChild(cardCont);
}

//Filtrado

function validar(elemento){
    const divOrd = document.querySelector('.FiltrOrden');
    if(elemento == 'orden'){
        elimarFiltroFam()
        generarFiltro()
    }else if (elemento == 'familia') {
        
        if(divOrd){
            elimarFiltro()
            generarFitFamilia()
            
        }else{
            generarFitFamilia()
        }
        
       
        
    } else {
        if(divOrd){
            elimarFiltro()
            location.reload()
            
        }
        const divFam = document.querySelector('.FiltroFamilia');
        if(divFam){
            elimarFiltroFam()
            location.reload()
        }
        
        
    }
}

function generarFiltro(){
    limpiarHtml(divOrdenes);
    const secOrden = document.createElement('div');
    secOrden.classList.add('FiltrOrden');
    secOrden.innerHTML +=`
        <input class ='etiqueta' disabled  value='coleoptera'/>
        <input class ='etiqueta' disabled  value='Mantodea'/>
        <input class ='etiqueta' disabled  value='dermaptera'/>
        <input class ='etiqueta' disabled  value='dyptera'/>
        <input class ='etiqueta' disabled  value='hemiptera'/>
        <input class ='etiqueta' disabled  value='hymemoptera'/>
        <input class ='etiqueta' disabled  value='lepidoptera'/>
        <input class ='etiqueta' disabled  value='megaloptera'/>
        <input class ='etiqueta' disabled  value='neuroptera'/>
        <input class ='etiqueta' disabled  value='odonata'/>
        <input class ='etiqueta' disabled  value='Orthoptera'/>
    `
    secOrden.addEventListener('click',(e)=>{
        e.preventDefault()

        console.log(e.target.value)
        let valor = e.target.value;
        filtrar(valor);
    })
    divOrdenes.appendChild(secOrden)
    divfiltro.appendChild(divOrdenes);
}
/*Genera el div de las familias disponibles para filtar---- */
function generarFitFamilia(){
    limpiarHtml(divFamilia)
    const secOrden = document.createElement('div');
    secOrden.classList.add('FiltroFamilia');
    secOrden.innerHTML +=`
        <input class ='etiquetaFamilia' disabled  value='scarabidae'/>
        <input class ='etiquetaFamilia' disabled  value='Mantidae'/>
        <input class ='etiquetaFamilia' disabled  value='buprestidae'/>
        <input class ='etiquetaFamilia' disabled  value='curculionidae'/>
        <input class ='etiquetaFamilia' disabled  value='carabidae'/>
        <input class ='etiquetaFamilia' disabled  value='cerambycidae'/>
        <input class ='etiquetaFamilia' disabled  value='dysticidae'/>
        <input class ='etiquetaFamilia' disabled  value='Elateridae'/>
        <input class ='etiquetaFamilia' disabled  value='lampyridae'/>
        <input class ='etiquetaFamilia' disabled  value='tenobrinidae'/>
        <input class ='etiquetaFamilia' disabled  value='Blaberidae'/>
        <input class ='etiquetaFamilia' disabled  value='Blattidae'/>
        <input class ='etiquetaFamilia' disabled  value='Blattodea'/>
        <input class ='etiquetaFamilia' disabled  value='Asilidae'/>
        <input class ='etiquetaFamilia' disabled  value='Syrphidae'/>
        <input class ='etiquetaFamilia' disabled  value='Belostommatidae'/>
        <input class ='etiquetaFamilia' disabled  value='Cicadidae'/>
        <input class ='etiquetaFamilia' disabled  value='Coreidae'/>
        <input class ='etiquetaFamilia' disabled  value='Pyrrhocoridae'/>
        <input class ='etiquetaFamilia' disabled  value='reduviidae'/>
        <input class ='etiquetaFamilia' disabled  value='scutelleridae'/>
        <input class ='etiquetaFamilia' disabled  value='Apidae'/>
        <input class ='etiquetaFamilia' disabled  value='Braconidae'/>
        <input class ='etiquetaFamilia' disabled  value='formicidae'/>
        <input class ='etiquetaFamilia' disabled  value='multilidae'/>
        <input class ='etiquetaFamilia' disabled  value='pompilidae'/>
        <input class ='etiquetaFamilia' disabled  value='Scoliidae'/>
        <input class ='etiquetaFamilia' disabled  value='sphecidae'/>
        <input class ='etiquetaFamilia' disabled  value='vespidae'/>
        <input class ='etiquetaFamilia' disabled  value='Saturnidae'/>
        <input class ='etiquetaFamilia' disabled  value='corydalinae'/>
        <input class ='etiquetaFamilia' disabled  value='neuroptera'/>
        <input class ='etiquetaFamilia' disabled  value='Cordulegastridae'/>
        <input class ='etiquetaFamilia' disabled  value='Acridae'/>
        <input class ='etiquetaFamilia' disabled  value='Gryllidae'/>
        <input class ='etiquetaFamilia' disabled  value='Gryllotalpidae'/>
        <input class ='etiquetaFamilia' disabled  value='Procospiidae'/>
        <input class ='etiquetaFamilia' disabled  value='Tettigonidae'/>

    `

    secOrden.addEventListener('click',(e)=>{
        e.preventDefault();
        let valor = e.target.value;
        filtrarFamily(valor);

    })
    
    divFamilia.appendChild(secOrden)
    divfiltro.appendChild(divFamilia);
    
    
    
    
    
}

/*funcion para filtrar */
function filtrar(valor){
   const insectosfilt = insectos.filter((e)=>{
        if(e.orden == valor){
            return e;
        }else{
            console.log('no entra')
        }

    })
    console.log('desde funccion',insectosfilt);
    limpiarHtml(cardContainer);
    mostrarCard(insectosfilt);
}

/*funcion para filtrar familias */
function filtrarFamily(valor){
    
    const insectosfilt = insectos.filter((e)=>{
         if(e.familia == valor){
             return e;
         }else{
             console.log('no entra',e.familia);
         }
 
     })
     console.log('desde funccionFamily',insectosfilt);
     limpiarHtml(cardContainer);
     mostrarCard(insectosfilt);
 }


function limpiarHtml(divfiltro){
    while(divfiltro.firstChild){
        divfiltro.removeChild(divfiltro.firstChild)
        
    }
}



function elimarFiltro(){
    const secOrden = document.querySelectorAll('.FiltrOrden')
        if(secOrden){
           divfiltro.removeChild(divOrdenes);
        }
}

function elimarFiltroFam(){
    const sec = document.querySelector('.FiltroFamilia')
        if(sec){
            divfiltro.removeChild(divFamilia);
        }
}

/*Funcionalidad del carrsusel */
const divGrande = document.querySelector('.grande');
function carrusel(){
    let posicion = 0
    setInterval(()=>{
        if(posicion == 3 ){
            posicion = 0
        }
        let operacion = posicion * -33
        divGrande.style.transform = `translateX(${operacion}%)`
        console.log('gola',posicion)
        
        posicion = posicion+1
    },3000)
}

carrusel();



/*
let a = [{nombre:'bryan',edad:15},{nombre:'bryan',edad:15},{nombre:'bryan',edad:23},{nombre:'felix',edad:100000}]
let aSin =[]
for (let i = 0; i < a.length; i++) {
    if(aSin.includes(a[i].nombre)){
        console.log('Elemento repetido');
    }else{
        console.log(a[i].nombre)
        aSin.push(a[i])
    }
    
}
console.log(aSin)
const aFiltrado = a.filter((e)=>{
    if(e.nombre =='bryan'){
        return e
    }
})

console.log(aFiltrado)

const prueba = document.querySelector('.prueba')
prueba.addEventListener('click',(e)=>{
    console.log(e.target.value)
})
*/
