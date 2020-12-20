function horas(){
    var titulo_hora = document.getElementById('titulo_horas');
    var titulo = document.getElementById('titulo');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundo = data.getSeconds();
    titulo_hora.innerHTML ="Agora são "+ hora+":"+minutos+":"+segundo;
    if (hora >=4 && hora<=12){
        titulo.innerHTML =`Bom Dia`;
        document.body.style.backgroundImage = "url('img/noite.jpg')";
        document.body.style.backgroundPosition="center";

    }else if (hora >12 && hora<=18){
        titulo.innerHTML =`Boa tarde`;
        document.body.style.backgroundImage = "url('img/tarde.jpg')";
        document.body.style.backgroundPosition="center";

    }else{
        titulo.innerHTML =`Boa noite`;
        document.body.style.backgroundImage = "url('img/noite.jpg')";
        document.body.style.backgroundPosition="center";
    }
}
window.setInterval("horas();",1000);
