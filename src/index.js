//importacion de modulos de node
const express = require("express");


//configuraciones
var  port = 3000;
var app =express();
var tareas = [{titulo:"Diceñar un loguin", Detalle:"deveria de ser con el metodo JWT"}];
var datos_personales = [{nombres:"jho ce", apellidos:"Hap",edad:35}];
var dep_bolivia = [{departamento:"la paz",abitantes:23456,superficie:"234567km"}];

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//crear rutas con express(metodos [get, post, put, delete])
app.get("/",function(peticion, respuesta){
    console.log(peticion.method, peticion.url, peticion.body);
    respuesta.send("Biemvenida al Usuario a mi pagina web");
});


app.get("/tareas", function(req, res){
      res.json(tareas);

});
app.get("/datos_personales",function(solicitud, retorno){
    retorno.json(datos_personales);

});
app.get("/dep_bolivia", function(pedir, dar){
    dar.json(dep_bolivia);
});
//----------------post-------------------------
 app.post("/tareas", function(req, res){
     console.log(req.body)
     tareas.push(req.body);
    res.json({mensaje:"Tarea registrada correctamente"});
 });


 app.post("/", function(solicitud,retorno){
     console.log(solicitud.body)
     datos_personales.push(solicitud.body);
     retorno.json({mensaje:"Datos registrados correctamente"})
 });


 app.post("/dep_bolivia", function(recibir, dar){
     console.log(recibir.body)
     dep_bolivia.push(recibir.body)
dar.json({mensaje:"REgistro exitoso"});
 });

 
//levantar el servidor con node  o express o node
app.listen(port, function(){
console.log("Servidor iniciado en: http//:127.0.0.1:"+port);
});