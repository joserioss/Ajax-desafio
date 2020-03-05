const URL1 = 'https://jsonplaceholder.typicode.com/users'
const URL2 = 'https://jsonplaceholder.typicode.com/posts'
const URL3 = 'https://jsonplaceholder.typicode.com/albums'

$(document).ready(() => {
    $('#combo1').change(seleccion)
    seleccion()
})

function seleccion(){
    var combo1 = $('select').get(0)
    var archivo = ''
    switch (combo1.value) {
        case "0": archivo = 'usuarios.html'
            break;
        case "1": archivo = 'posteos.html'
            break;
        case "2": archivo = 'album.html'
            break;
    }
    $.ajax({
        "url": archivo,
        "dataType": 'html',
    }).done(function (data){
        $('#tipos').html(data).get(0).innerHTML = data
        console.log(data)
    })
}

function cargarUsuarios(){
    let datosTxT

    fetch(URL1, { method: 'GET' })
        .then(x => x.json())
        .then(x => x.forEach(usuario => imprime_usuario(usuario)))

    const imprime_usuario = (elemento) => {
        datosTxT += ` 
    <tr>
        <td>${elemento.id} </td> 
        <td>${elemento.name}</td>
        <td>${elemento.username}</td>
        <td>${elemento.email}</td>
    </tr>
    `
        document.getElementById("cuerpo_tabla_usuario").innerHTML = datosTxT

    }
}

function cargarPosteos(){
    let datosTxT

    fetch(URL2, { method: 'GET' })
        .then(x => x.json())
        .then(x => x.forEach(post => imprime_posteo(post)))

    const imprime_posteo = (elemento) => {
        datosTxT += ` 
    <tr>
        <td>${elemento.title}</td>
        <td>${elemento.body}</td>
    </tr>
    `
        document.getElementById("cuerpo_tabla_posteo").innerHTML = datosTxT
    }
}

function cargarAlbumes(){
    let datosTxT

    fetch(URL3, { method: 'GET' })
        .then(x => x.json())
        .then(x => x.forEach(post => imprime_posteo(post)))

    const imprime_posteo = (elemento) => {
        datosTxT += ` 
    <tr>
        <td>${elemento.userId}</td>    
        <td>${elemento.title}</td>
    </tr>
    `
        document.getElementById("cuerpo_tabla_album").innerHTML = datosTxT
    }
}