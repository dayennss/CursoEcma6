class CriaContato {
    constructor() {
        this.contatos = [];
        this.inputElNome = $('#idNome')[0];
        this.inputElEmail = $('#idEmail')[0];
        this.inputElTelefone = $('#idTelefone')[0];
        this.listEl = $('.elemLista');

        this.buttonElemAdd = $('#btnAdd')
        this.buttonElemClear = $('#btnClear')
        this.registerContact();
        this.clearingContact();
    }
    registerContact() {
        this.buttonElemAdd.on('click', (event) => this.addContact(event));
    }

    clearingContact() {
        this.buttonElemClear.on('click', (event)=> this.clearContact(event))
    }
 

    async clearContact(event){
        this.contatos = [];
        this.listEl.html('');
    }


     async addContact(event) {
        event.preventDefault();
        const nome = this.inputElNome.value;
        const email = this.inputElEmail.value;
        const telefone = this.inputElTelefone.value;

        if (nome.length ===0  || email.length ===0 || telefone.length ===0) {
            alert("Valide os campos e tente novamente.");
            return;
        }
        $('.form-control').val('')
        this.contatos.push({
            nome, 
            email, 
            telefone
        });
        this.render();
    }
    render() {
        this.listEl.html('');
        this.contatos.forEach(con => {
            let br = document.createElement('br');
            let br1 = document.createElement('br');

            let imgEl = document.createElement('img');
            $(imgEl).attr('src','http://www.ccrnigeria.org/admin/img/user/user1.svg');
            
            // criando elementos de nome
            let nomeEl = document.createElement('span');
            let TituloNome = document.createElement("strong")
            
            // escrevendo nos elementos de nome.
            TituloNome.appendChild(document.createTextNode("Nome: "));
            nomeEl.appendChild(document.createTextNode(con.nome));

            // **

            // criando elementos de email
            let emailEl = document.createElement('span');
            let TituloEmail = document.createElement('strong');

            // escrevendo nos elementos de email 
            TituloEmail.appendChild(document.createTextNode("Email: "));
            emailEl.appendChild(document.createTextNode(con.email));

            // **

            // criando elementos de telefone
            let  telEl = document.createElement('span');
            let  tituloTel = document.createElement('strong');   

            // escrevendo nos elementos de telefone
            tituloTel.appendChild(document.createTextNode('Telefone: '));
            telEl.appendChild(document.createTextNode(con.telefone));


            let listContats = document.createElement('li');
            listContats.appendChild(TituloNome);
            listContats.appendChild(imgEl);
            listContats.appendChild(nomeEl);
            listContats.appendChild(br)

            listContats.appendChild(TituloEmail);
            listContats.appendChild(emailEl);
            listContats.appendChild(br1)

            listContats.appendChild(tituloTel);
            listContats.appendChild(telEl);
            

            this.listEl[0].appendChild(listContats)
        })

    }

}

new CriaContato();