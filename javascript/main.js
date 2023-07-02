/*cambiar una imagen por otra al hacer click */
let miImagen= document.getElementById('mat3');

miImagen.onclick= function(){ 
    let miSrc=miImagen.getAttribute('src');
    if(miSrc==='imagenes/mat3.png'){
        miImagen.setAttribute('src','imagenes/mat6.png');
    }else{
        miImagen.setAttribute('src','imagenes/mat3.png');
    }
}

