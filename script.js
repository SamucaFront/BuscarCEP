function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('texto').innerHTML = this.responseText;
        //SE QUISER BUSCAR SOMENTE UMA INFORMAÇAO ESPECIFICA USE THIS...
        //obs: TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);
        
        //AQUI PEGUEI OS VALORES QUE EU QUERIA
        let Logradouro = obj.logradouro;
        let Bairro = obj.bairro;
        let Estado = obj.uf;
        let CEP = obj.cep;
        let DDD = obj.ddd;
        let Cidade = obj.localidade;

        document.getElementById('texto').innerHTML = "Logradouro:" +Logradouro+ "<br> Bairro: "+Bairro+"<br> Estado:"+ Estado + "<br> CEP:"+CEP+ "<br> DDD: "+DDD+"<br> Cidade:"+Cidade;
} 
    
}