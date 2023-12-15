(function() {

    var url = "http://localhost:8080/users";        
        
    this.Usuario = function() {}

    //Metodos Publicos  

    Usuario.prototype.create = function() {}

    Usuario.prototype.buscarTodos = async function() {
        var data = await get("busca/todos", null);
        console.log(data);
    }

    Usuario.prototype.busca = async function() {
        var data = await get("busca", id);
        console.log(data);
    }

    Usuario.prototype.update = function(id, name, email) {}

    Usuario.prototype.delete = function(id) {}

    //Metodos privados

    async function get(path, id) {

        //concatenação de strings
        if (id == null) {
            var _url = `${url}/${path}`;
        } else {
            var _url = `${url}/${path}?${id}`;
        }

        //chamada do serviço
        var response = await fetch(_url,{"mode": "no-cors"});

        //lendo a resposta do serviço como json
        var data = await response.json();

        //retornando os dados do serviço
        return data;
    }
    
    function post(path, body) {}

    function put(path, id, body) {}

    function del(path, id) {}

    
}())