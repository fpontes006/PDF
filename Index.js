const fs = require("fs");

function modificarjson(nome,curso,categoria){
fs.readFile("./usuario.json",{encoding:'utf-8'},(erro,dados)=>{
    if(erro){
        console.log("Erro no Arquivo!");
    }else{
        var conteudo = JSON.parse(dados);
        
        conteudo.nome = nome;
        conteudo.curso = curso;
        conteudo.categoria = categoria;

        fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
            if(erro){
                console.log("Erro no Arquivo!");
            }
        })
    }
});
}

modificarjson("Filho","Node.js","C#");