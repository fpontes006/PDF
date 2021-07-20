var Reader = require("./Reader");
var Processor = require("./Processor");


var leitor = new Reader();

async function main(){

   var dados = await leitor.read("./excel.csv");
  var dadosProcesados =  Processor.Process(dados);
}

main();