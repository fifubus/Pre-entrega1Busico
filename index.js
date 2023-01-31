

alert("Bienvenido a nuestro e-shop")

let decision=prompt("Que deseas comprar? (Remeras, Pantalones, Cinturones, Medias o Ropa interior)")


switch (decision){
    
    case "remeras":
    let remeras=parseInt(prompt("Cuantas vas a llevar?"))
    if(remeras<=10){
        console.log("Te llevas" + " " + remeras + " " + "remeras")
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")                    //COMPRA DE REMERAS//
        if((pago=="si") || (pago=="Si") || (pago=="claro") || (pago=="SI") || (pago=="CLARO")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "remera":
    let remera=parseInt(prompt("Cuantas vas a llevar?"))
    if(remera<=10){
        console.log("Te llevas" + " " + remera + " " + "remeras")
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")                    //COMPRA DE REMERAS//
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "pantalones":
    let pantalones=parseInt(prompt("Cuantos vas a llevar?"))
    if(pantalones<=10){
        console.log("Te llevas" + " " + pantalones + " " + "pantalones")
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")                  //COMPRA DE PANTALONES//
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "pantalon":
    let pantalon=parseInt(prompt("Cuantos vas a llevar?"))
    if(pantalon<=10){
        console.log("Te llevas" + " " + pantalon + " " + "pantalones")
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")                  //COMPRA DE PANTALONES//
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "cinturones":
    let cinturones=parseInt(prompt("Cuantos vas a llevar?"))
    if(cinturones<=10){
        console.log("Te llevas" + " " + cinturones + " " + "cinturones")             //COMPRA DE CINTURONES//
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "cinturon":
        let cinturon=parseInt(prompt("Cuantos vas a llevar?"))
    if(cinturon<=10){
        console.log("Te llevas" + " " + cinturon + " " + "cinturones")             //COMPRA DE CINTURONES//
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")
        if((pago=="si") || (pago=="Si") || (pago=="claro") || (pago=="SI") || (pago=="CLARO")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "medias":
    let medias=parseInt(prompt("Cuantas vas a llevar?"))
    if(medias<=10){
        console.log("Te llevas" + " " + medias + " " + "medias")
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")                //COMPRA DE MEDIAS//
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "ropa interior":
    let ropaInt=parseInt(prompt("Cuantos vas a llevar?"))
    if(ropaInt<=10){
        console.log("Te llevas" + " " + ropaInt + " " + "de ropa interior")         //COMPRA DE ROPA INTERIOR//
        let pago=prompt("Estas seguro de llevar este/os articulo/s?")
        if((pago=="si") || (pago=="Si") || (pago=="claro")){
            alert("Has comprado exitosamente!")
            console.log("Has comprado exitosamente")
            break;
        }else{
            alert("Si cambias de opinion refresca la pagina!")
            console.log("Usuario no compro nada")
            break;
        }
    }else{
        alert("Error, el ususario coloco valores invalidos (solo se puede comprar hasta 10 prendas)")
    }
    
    case "nada":
    alert("Si queres comprar algo en algun momento refresca la pagina. Saludos!")       //SI NO SE COMPRA NADA//
    console.log("Usuario no compro nada")
    break;
}

