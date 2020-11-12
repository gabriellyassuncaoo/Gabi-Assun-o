$.getJSON('https://demo9738255.mockable.io/usuario', function(data) {         
    let user = data.usuario;
    let nome = document.getElementById('nome');
    let telefone = document.getElementById('telefone');
    let cpf = document.getElementById('cpf');
    let rua = document.getElementById('rua');
    let numero = document.getElementById('numero');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');
    let grau = document.getElementById('grau');
    let curso = document.getElementById('curso');
    let semestre = document.getElementById('semestre');
    let universidade = document.getElementById('universidade');
    let anoInicio = document.getElementById('anoInicio');
    let anoFim = document.getElementById('anoFim');
    document.getElementById("linkedin").href= user.contato.linkedin;
    document.getElementById("img").src= user.foto;
    document.getElementById("imgFaculdade").src= user.educacao.logo;


    nome.innerHTML = user.nome;
    telefone.innerHTML = user.contato.celular;
    cpf.innerHTML = user.cpf;
    rua.innerHTML =  user.endereco.logradouro;
    numero.innerHTML = user.endereco.numero;
    bairro.innerHTML = user.endereco.bairro;
    cidade.innerHTML = user.endereco.cidade;
    estado.innerHTML = user.endereco.estado;


    grau.innerHTML = user.educacao.grau;
    curso.innerHTML = user.educacao.curso;
    semestre.innerHTML = user.educacao.semestre;
    universidade.innerHTML = user.educacao.universidade;
    anoInicio.innerHTML = user.educacao.anoInicio;
    anoFim.innerHTML = user.educacao.anoFim;
});


