const { response, request } = require('express');
//constante requerindo o express
const express = require('express');

//constante atribuindo os recursos do express ao app
const app = express();

//habilitar aplicação para receber json no body
app.use(express.json());

//buscar informação
app.get("/courses",(request, response) =>{
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

//inserir
app.post("/courses",(request, response) =>{
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

//Alterar
app.put("/courses/:id", (request,response) =>{
    const params = request.params;
    console.log(params);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

//Alterar valor unico
app.patch("/courses/:id",(request,response) =>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

//deletar
app.delete("/courses/:id",(request,response) =>{
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
});

//exemplo: localhost:3333
app.listen(3333)