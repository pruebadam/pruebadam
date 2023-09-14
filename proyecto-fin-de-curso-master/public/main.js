let comprobar = 0
let total = 0
recoger = true
llevar = false

//FUNCION DE LOS BOTONES PARA ELEGIR SI EL PEDIDO SERA PARA DOMICILIO O PARA RECOGER
//FUNCION DE LOS BOTONES PARA ELEGIR SI EL PEDIDO SERA PARA DOMICILIO O PARA RECOGER
//FUNCION DE LOS BOTONES PARA ELEGIR SI EL PEDIDO SERA PARA DOMICILIO O PARA RECOGER

function btn1(){
    let boton1 = document.getElementById('boton1')
    let boton2 = document.getElementById('boton2')
    boton1.style.backgroundColor = "#ffd10b"
    boton1.style.border = "none"
    boton2.style.backgroundColor = "white"
    boton2.style.border = "1px dashed black"
    llevar = true
    localStorage.setItem("variable", llevar);
        
}
function btn2(){
    let boton1 = document.getElementById('boton1')
    let boton2 = document.getElementById('boton2')
    boton2.style.backgroundColor = "#ffd10b"
    boton2.style.border = "none"
    boton1.style.backgroundColor = "white"
    boton1.style.border = "1px dashed black"
    llevar = false
    localStorage.setItem("variable", llevar);
}

//GRUPO DE FUNCIONES PARA DESPLEGAR LO QUE EL USUARIO QUIERA PEDIR: ESPECIALIDADES, ENTRANTES, ETC
//GRUPO DE FUNCIONES PARA DESPLEGAR LO QUE EL USUARIO QUIERA PEDIR: ESPECIALIDADES, ENTRANTES, ETC
//GRUPO DE FUNCIONES PARA DESPLEGAR LO QUE EL USUARIO QUIERA PEDIR: ESPECIALIDADES, ENTRANTES, ETC

function abrir(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    especialidad.style.display = 'block'
    entrante.style.display = 'none'
    sopa.style.display = 'none'
    postre.style.display = 'none'

}
function aentrante(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    postre.style.display = 'none'
    especialidad.style.display = 'none'
    entrante.style.display = 'block'
    sopa.style.display = 'none'
}
function asopa(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    postre.style.display = 'none'
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'block'
}
function apostre(){
    let especialidad = document.getElementById('especialidad')
    let entrante = document.getElementById('entrante')
    let sopa = document.getElementById('sopa')
    let postre = document.getElementById('postre')
    postre.style.display = 'block'
    especialidad.style.display = 'none'
    entrante.style.display = 'none'
    sopa.style.display = 'none'
}
// GRUPO DE FUNCIONES PARA PEDIR LAS ESPECIALIDADES Y QUITAR LOS INGREDIENTES QUE EL USARIO DESEE
// GRUPO DE FUNCIONES PARA PEDIR LAS ESPECIALIDADES Y QUITAR LOS INGREDIENTES QUE EL USARIO DESEE
// GRUPO DE FUNCIONES PARA PEDIR LAS ESPECIALIDADES Y QUITAR LOS INGREDIENTES QUE EL USARIO DESEE

function navarroz (){
    comprobar += 1
    total += 7
    let cebolla = document.getElementById('cebolla').checked
    let champiñones = document.getElementById('champiñones').checked
    let pollo = document.getElementById('pollo').checked
    let frita = document.getElementById('frita').checked
    let salsa = document.getElementById('salsa').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde')
    verde.style.display = 'block'
    preciox.textContent = "7€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/arroz.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde')
        verde.style.display = 'none'
        document.getElementById('cebolla').checked = false
        document.getElementById('champiñones').checked = false
        document.getElementById('pollo').checked = false
        document.getElementById('frita').checked = false
        document.getElementById('salsa').checked = false
    }, 2000);
    plato.textContent = 'Navarroz' 
    if (cebolla){
        let cebollax = document.createElement('p')
        cebollax.textContent = 'Sin cebolla'
        arroz.appendChild(cebollax)
    }
    if(champiñones){
        let champiñonex = document.createElement('p')
        champiñonex.textContent = 'Sin champiñones'
        arroz.appendChild(champiñonex)
    }
    if(pollo){
        let pollox = document.createElement('p')
        pollox.textContent = 'Sin Pollo'
        arroz.appendChild(pollox)
    }
    if(frita){
        let fritax = document.createElement('p')
        fritax.textContent = 'Sin cebolla frita'
        arroz.appendChild(fritax)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function ensalada (){
    comprobar += 1
    total += 8.5
    comprobar += 1
    let tomate = document.getElementById('tomate').checked
    let gambas = document.getElementById('gambas').checked
    let pepino = document.getElementById('pepino').checked
    let frita = document.getElementById('frita1').checked
    let salsa = document.getElementById('salsa1').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verdee = document.getElementById('verdee')
    verdee.style.display = 'block'
    preciox.textContent = "8,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/i.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verdee = document.getElementById('verdee')
        verdee.style.display = 'none'
        document.getElementById('tomate').checked = false
        document.getElementById('gambas').checked = false
        document.getElementById('pepino').checked = false
        document.getElementById('frita1').checked = false
        document.getElementById('salsa1').checked = false
    }, 2000);
    plato.textContent = 'Elvisa' 
    if (tomate){
        let tomatex = document.createElement('p')
        tomatex.textContent = 'Sin tomate'
        arroz.appendChild(tomatex)
    }
    if(gambas){
        let gambax = document.createElement('p')
        gambax.textContent = 'Sin gambas'
        arroz.appendChild(gambax)
    }
    if(pepino){
        let pepinox = document.createElement('p')
        pepinox.textContent = 'Sin pepino'
        arroz.appendChild(pepinox)
    }
    if(frita){
        let fritax = document.createElement('p')
        fritax.textContent = 'Sin cebolla frita'
        arroz.appendChild(fritax)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function chen (){
    comprobar += 1
    total += 8
    let ternera = document.getElementById('ternera').checked
    let tofu = document.getElementById('tofu').checked
    let pollo = document.getElementById('pollo1').checked
    let sesamo = document.getElementById('sesamo').checked
    let salsa = document.getElementById('salsa2').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde1')
    verde.style.display = 'block'
    preciox.textContent = "8€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/chem.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde1')
        verde.style.display = 'none'
        document.getElementById('ternera').checked = false
        document.getElementById('tofu').checked = false
        document.getElementById('pollo1').checked = false
        document.getElementById('sesamo').checked = false
        document.getElementById('salsa2').checked = false
    }, 2000);
    plato.textContent = 'Chen' 
    if (ternera){
        let ternerax = document.createElement('p')
        ternerax.textContent = 'Sin ternera'
        arroz.appendChild(ternerax)
    }
    if(tofu){
        let tofux = document.createElement('p')
        tofux.textContent = 'Sin tofu'
        arroz.appendChild(tofux)
    }
    if(pollo){
        let pollox = document.createElement('p')
        pollox.textContent = 'Sin Pollo'
        arroz.appendChild(pollox)
    }
    if(sesamo){
        let sesamox = document.createElement('p')
        sesamox.textContent = 'Sin sesamo'
        arroz.appendChild(sesamox)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function fortu (){
    comprobar += 1
    total += 7.5
    let cerdo = document.getElementById('cerdo').checked
    let cachai = document.getElementById('cachai').checked
    let zanahoria = document.getElementById('zanahoria').checked
    let packchoi = document.getElementById('packchoi').checked
    let salsa = document.getElementById('salsa3').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde2')
    verde.style.display = 'block'
    preciox.textContent = "7,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/pasta.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde2')
        verde.style.display = 'none'
        document.getElementById('cerdo').checked = false
        document.getElementById('cachai').checked = false
        document.getElementById('zanahoria').checked = false
        document.getElementById('packchoi').checked = false
        document.getElementById('salsa3').checked = false
    }, 2000);
    plato.textContent = '4tuNoodles' 
    if (cerdo){
        let cerdox = document.createElement('p')
        cerdox.textContent = 'Sin cerdo'
        arroz.appendChild(cerdox)
    }
    if(cachai){
        let cachaix = document.createElement('p')
        cachaix.textContent = 'Sin cachai'
        arroz.appendChild(cachaix)
    }
    if(zanahoria){
        let zanahoriax = document.createElement('p')
        zanahoriax.textContent = 'Sin zanahoria'
        arroz.appendChild(zanahoriax)
    }
    if(packchoi){
        let packchoix = document.createElement('p')
        packchoix.textContent = 'Sin pak choi'
        arroz.appendChild(packchoix)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function adrian (){
    comprobar += 1
    total += 7
    let pimiento = document.getElementById('pimiento').checked
    let piña = document.getElementById('piña').checked
    let pollo3 = document.getElementById('pollo3').checked
    let sesamo2 = document.getElementById('sesamo2').checked
    let salsa = document.getElementById('salsa4').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde3')
    verde.style.display = 'block'
    preciox.textContent = "7€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/tom.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde3')
        verde.style.display = 'none'
        document.getElementById('pimiento').checked = false
        document.getElementById('piña').checked = false
        document.getElementById('pollo3').checked = false
        document.getElementById('sesamo2').checked = false
        document.getElementById('salsa4').checked = false
    }, 2000);
    plato.textContent = 'Adrian arroz' 
    if (pimiento){
        let pimientox = document.createElement('p')
        pimientox.textContent = 'Sin pimiento'
        arroz.appendChild(pimientox)
    }
    if(piña){
        let piñax = document.createElement('p')
        piñax.textContent = 'Sin piña'
        arroz.appendChild(piñax)
    }
    if(pollo3){
        let pollo3x = document.createElement('p')
        pollo3x.textContent = 'Sin pollo'
        arroz.appendChild(pollo3x)
    }
    if(sesamo2){
        let sesamo2x = document.createElement('p')
        sesamo2x.textContent = 'Sin sesamo'
        arroz.appendChild(sesamo2x)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function xexuga (){
    comprobar += 1
    total += 9
    let queso = document.getElementById('queso').checked
    let frita3 = document.getElementById('frita3').checked
    let papaya = document.getElementById('papaya').checked
    let tomate = document.getElementById('tomate1').checked
    let salsa = document.getElementById('salsa5').checked
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verde5')
    verde.style.display = 'block'
    preciox.textContent = "9€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/plato/ensalada.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verde5')
        verde.style.display = 'none'
        document.getElementById('queso').checked = false
        document.getElementById('frita3').checked = false
        document.getElementById('papaya').checked = false
        document.getElementById('tomate1').checked = false
        document.getElementById('salsa5').checked = false
    }, 2000);
    plato.textContent = 'Xexuga' 
    if (queso){
        let quesox = document.createElement('p')
        quesox.textContent = 'Sin queso de cabra'
        arroz.appendChild(quesox)
    }
    if(frita3){
        let frita3x = document.createElement('p')
        frita3x.textContent = 'Sin cebolla frita'
        arroz.appendChild(frita3x)
    }
    if(papaya){
        let papayax = document.createElement('p')
        papayax.textContent = 'Sin papaya'
        arroz.appendChild(papayax)
    }
    if(tomate){
        let tomatex = document.createElement('p')
        tomatex.textContent = 'Sin tomate'
        arroz.appendChild(tomatex)
    }
    if(salsa){
        let salsax = document.createElement('p')
        salsax.textContent = 'Sin salsa'
        arroz.appendChild(salsax)
    }
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}

//GRUPO DE FUNCIONES PARA AÑADIR EL ENTRANTE SELECCIONADO AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR EL ENTRANTE SELECCIONADO AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR EL ENTRANTE SELECCIONADO AL PEDIDO

function takoyaki (){
    comprobar += 1
    total += 5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex')
    verde.style.display = 'block'
    preciox.textContent = "5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/entrante/takoyaki.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Takoyaki' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function wantun (){
    comprobar += 1
    total += 4
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex1')
    verde.style.display = 'block'
    preciox.textContent = "4€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/entrante/wantun.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex1')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Wan tun' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function gyozas (){
    comprobar += 1
    total += 4.5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex2')
    verde.style.display = 'block'
    preciox.textContent = "4,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/entrante/gyozas.jpg")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex2')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Gyozas' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO

function dowdo (){
    comprobar += 1
    total += 4.5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex3')
    verde.style.display = 'block'
    preciox.textContent = "4,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/sopa/dowdo.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex3')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Sopa dowdo' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO

function yaya (){
    comprobar += 1
    total += 4.5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex5')
    verde.style.display = 'block'
    preciox.textContent = "4,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/sopa/yaya.webp")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex5')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Sopa la yaya' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR LA SOPA SELECCIONADA AL PEDIDO

function pobre (){
    comprobar += 1
    total += 4.5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex6')
    verde.style.display = 'block'
    preciox.textContent = "4,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/sopa/pobre.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex6')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Sopa de pobre' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
//GRUPO DE FUNCIONES PARA AÑADIR EL POSTRE SELECCIONADO AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR EL POSTRE SELECCIONADO AL PEDIDO
//GRUPO DE FUNCIONES PARA AÑADIR EL POSTRE SELECCIONADO AL PEDIDO

function coulant (){
    comprobar += 1
    total += 5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex7')
    verde.style.display = 'block'
    preciox.textContent = "5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/postre/postre.webp")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex7')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Coulant' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function tarta (){
    comprobar += 1
    total += 3
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex8')
    verde.style.display = 'block'
    preciox.textContent = "3€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/postre/tarta.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex8')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Tarta de galleta' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}
function queso (){
    comprobar += 1
    total += 5.5
    let div = document.getElementById('nonex')
    let arroz = document.createElement('div')
    let precio = document.createElement('div')
    let preciox = document.createElement('h3')
    let verde = document.getElementById('verdex9')
    verde.style.display = 'block'
    preciox.textContent = "5,5€"
    precio.appendChild(preciox)
    precio.style.border = "none"
    precio.style.display = 'flex'
    precio.style.justifyContent = 'right'
    preciox.style.marginRight = '1rem'
    precio.style.marginTop = '0px'
    precio.style.marginBottom = '0px'
    preciox.style.color = '#ffd10b'
    preciox.style.fontWeight = '500'
    let plato = document.createElement('h3')
    let img = document.createElement('img')
    let hr = document.createElement('hr')
    img.setAttribute('src', "/img/postre/queso.png")
    arroz.appendChild(plato)
    arroz.appendChild(img)
    div.appendChild(arroz)
    console.log(div)
    setTimeout(function() {
        let verde = document.getElementById('verdex9')
        verde.style.display = 'none'
    }, 2000);
    plato.textContent = 'Tarta de queso' 
    arroz.appendChild(precio)
    arroz.appendChild(hr)
}

//FUNCION QUE PREVIENE EL PODER HACER EL PEDIDO SIN HABER AÑADIDO NADA A ESTE
//FUNCION QUE PREVIENE EL PODER HACER EL PEDIDO SIN HABER AÑADIDO NADA A ESTE
//FUNCION QUE PREVIENE EL PODER HACER EL PEDIDO SIN HABER AÑADIDO NADA A ESTE

function raton (){
    if (comprobar == 0){
        let div = document.getElementById('nonex')
        let adios = document.createElement('div')
        let preciox = document.createElement('h3')
        preciox.textContent = "Todavia no se ha añadido nada"
        adios.appendChild(preciox)
        div.appendChild(adios)
        adios.setAttribute('id', 'adios')
    } if (comprobar > 0){
        let div = document.getElementById('nonex')
        let prueba = document.createElement('div')
        let adios = document.getElementById('adios')
        let ponerboton = document.getElementById('precio')
        if (adios){
            adios.style.display = 'none'
        }
        if (ponerboton){
            console.log('a')
        }else{
            let a = document.createElement('a')
            a.setAttribute('href', '/confirmar')
            let boton = document.createElement('button')
            boton.setAttribute('id', 'precio')
            boton.setAttribute('onclick', 'pedir()')
            boton.textContent = 'Confirmar pedido ' + total + '€'
            a.appendChild(boton)
            prueba.appendChild(a)
            div.appendChild(prueba)
            let miVariable = total
            localStorage.setItem("dostotal", miVariable);
        }
    }
}
//FUNCION PARA SABER SI EL PEDIDO ES PARA RECOGER O A DOMICILIO
//FUNCION PARA SABER SI EL PEDIDO ES PARA RECOGER O A DOMICILIO
//FUNCION PARA SABER SI EL PEDIDO ES PARA RECOGER O A DOMICILIO

function funcion(){
    let total = localStorage.getItem("dostotal");
    let envio = localStorage.getItem("variable");
    let importe = document.getElementById('importe')
    importe.textContent = 'Importe de ' + total + '€'
    console.log(recoger)
    let recogida = document.getElementById('recogida')
    let casa = document.getElementById('domicilio')
    if (envio == 'true'){
        casa.style.display = 'flex'
        recogida.style.display = 'none'

    }else{
        recogida.style.display = 'flex'
        casa.style.display = 'none'
    }
}
//FUNCION PARA CONFIRMAR RESERVA
//FUNCION PARA CONFIRMAR RESERVA
//FUNCION PARA CONFIRMAR RESERVA

function reserva(){
    let poner = document.getElementById('reservaconfirmada')
    console.log(poner)
    poner.style.display = 'flex'
    setTimeout(function() {
        let poner = document.getElementById('reservaconfirmada')
        poner.style.display = 'none'
    }, 2000);
}
//FUNCION PARA CONFIRMAR LA SUGERENCIA
//FUNCION PARA CONFIRMAR LA SUGERENCIA
//FUNCION PARA CONFIRMAR LA SUGERENCIA

function contacto(){
    let poner = document.getElementById('contacto')
    console.log(poner)
    poner.style.display = 'flex'
    setTimeout(function() {
        let poner = document.getElementById('contacto')
        poner.style.display = 'none'
    }, 2000);
}