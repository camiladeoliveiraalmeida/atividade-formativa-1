// Atividade 1

function validarDados() {
    let data = frmRegistro.inData.value;
    let cliente = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;

    document.getElementById('mensagem-erro').style.display = "block"
    let erro = document.getElementById('mensagem-erro')

    if (data.trim() =='') {
        alert('O campo data não pode estar vazio!');
        frmRegistro.inData.focus();
        return false;
    }

    if (cliente.trim() =='') {
        alert('O campo nome não pode estar vazio!');
        frmRegistro.inCli.focus();
        return false;
    }

    if (telefone.trim() =='') {
        alert('O campo telefone não pode estar vazio!');
        frmRegistro.inTel.focus();
        return false;
    }

    if (email.trim() =='') {
        alert('O campo email não pode estar vazio!');
        frmRegistro.inMail.focus();
        return false;
    }

    if (produto.trim() =='') {
        alert('O campo produto não pode estar vazio!');
        frmRegistro.inProd.focus();
        return false;
    }

    if (quantidade.trim() =='') {
        alert('O campo quantidade não pode estar vazio!');
        frmRegistro.inQtd.focus();
        return false;
    }
    
    if (valor.trim() =='') {
        alert('O campo valor não pode estar vazio!');
        frmRegistro.inVal.focus();
        return false;
    }

    if (quantidade < 0) {
        alert('Somente números positivos!')
    }

    if (valor < 0) {
        alert('Somente números positivos!')
    }

    if (cliente ==''||cliente.length<5) {
        erro.style.display='block';
        erro.innerHTML='O campo nome não pode conter menos de 5 caracteres';
        frmRegistro.inCli.focus();
        return false;
    }

    if (telefone ==''||telefone.length<5) {
        erro.style.display='block';
        erro.innerHTML='O campo telefone não pode conter menos de 5 caracteres';
        frmRegistro.inFone.focus();
        return false;
    }

    if (email ==''||email.length<5) {
        erro.style.display='block';
        erro.innerHTML='O campo e-mail não pode conter menos de 5 caracteres';
        frmRegistro.inMail.focus();
        return false;
    }

    if (produto ==''||produto.length<5) {
        erro.style.display='block';
        erro.innerHTML='O campo produto não pode conter menos de 5 caracteres';
        frmRegistro.inProd.focus();
        return false;
    }
}

// Atividade 2

function atualizarDados() {
    let canvas = document.getElementById('canvas') 
    let qtd = document.getElementById('inQtdImg')
    let elemento = '<img src="img/cao.jpg">'
    canvas.innerHTML=''
    console.log(qtd)
    console.log(elemento)
    for(let i=0; i<qtd.value; i++) {
        canvas.innerHTML += elemento
    }
}

// Atividade 3

function alterarLampada() {
    let imagem  = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);


    if (arquivo=='apagada.jpg'||arquivo=='') {
        imagem.src = 'img/acesa.jpg'
    }
    else {
        imagem.src = 'img/apagada.jpg'
    }

    let botao = document.getElementById('btnEnviar');

    if (botao.textContent == 'Apagar') {
        botao.textContent = 'Acender';
    }

    else {
        botao.textContent = 'Apagar'
    }
}

// Atividade 4

function calcular() {
    
    var valor = document.getElementById('inValorPedido').value;
    var perc = document.getElementById('inPercDesc').value;
    var desc = document.getElementById('inValDesc').value;
    var valorL = document.getElementById('inValFinal').value;

    if (valor <= 500) {
        document.getElementById('inPercDesc').value = 0.5;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.5 * valor) / 100)
    }

    if (valor < 0) {
        alert('Somente valores positivos!')
    }

    let valorDesc = document.getElementById('inValDesc').value;
    let valor2 = valor - valorDesc;
    //let valorL = document.getElementById('inValFinal').value = valor2

    if (valor > 500 && valor <= 1000) {
        document.getElementById('inPercDesc').value = 0.8;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.8 * valor) / 100)
    }
    if (valor > 1000 && valor <= 1500) {
        document.getElementById('inPercDesc').value = 1.0;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = ( 1.0 * valor) / 100)
    }
     if (valor > 1500 && valor <= 2000){
        document.getElementById('inPercDesc').value = 1.5;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (1.5 * valor) / 100)
    }
}