let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');

// app.get('/', (req, res) => {
//     res.send('teste');
// });

// arquivos estáticos na pasta public. Como o caminho é /public, para referenciarmos o devido arquivo (css, script, imagem) da página, devemos passar o caminho completo nela. Caso não existisse esse /public aqui, poderíamos passar somente o nome do arquivo.  Por exemplo, da maneira que estamos atualmente referenciamos um arquivo css na index e para isso passamos o caminho absoluto dele "/public/style.css". Caso não colocássemos o '/public' como caminho no método app.use, só bastaria colocar o nome do arquivo ('style.css') no index.html
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE='uppercase'){
        res.json({
            "message": "HELLO JSON",
        });
    }
    res.json({
        "message": "Hello json",
    });
});


module.exports = app;

app.listen(3000, ()=>{
    console.log(`Server running in port 3000.`);
    
})


// dinossauros: balde esporte, colher, vasilha para aipim 
// continuidade fcc 

 
// arrumar o quarto
// descongelar geladeira
// comprar vasilhas para marombas, cessar a areia 

// cuecas na corda, fazer arroz,
// perfil no erome para divulgar o grupos18.com (perfil análogo ao vale a pena ver de novo )
// criar mais canais gratuitos
