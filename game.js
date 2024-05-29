// let perguntas= { 
//     titulo: 'pedir comida',
//    alternativas:[ 'i want a chesseburger', 'i would like a chesseburger' ,
//     'i have a chesseburger'],
//     correta: 1




// };
// let app ={

//   start: function(){
//     this.Atualpos = 0;
//     this.Totalpontos = 0;
//     let alts = document.querySelectorAll('.alternativa');
//     alts.forEach((element,index) => {
//         element.addEventListener('click', ()=> {
//             this.checkresposta(index);
//         })

//     })
//     this.atualizapontos()
//     app.mostrarquestao(perguntas[this.Atualpos])
//   },
       

    
//     mostrarquestao: function(q) {
//         this.qatual = q;
//         let titleDiv = document.getElementById('titulo')
//         titleDiv.textContent = q.titulo
//         let alts = document.querySelectorAll('.alternativa')
//         alts.forEach(function(element,index){
//             element.textContent = q.alternativas[index]
            
//         })
    
//     }, 
//     proximaperg: function () {
//         this.Atualpos++
//         if (this.Atualpos==perguntas.length){
//             this.Atualpos = 0
//         }

//     },
//     checkresposta: function (user) {
//         this.atualperg= perguntas[this.Atualpos]
//         if (this.atualperg.correta == user) {
//             console.log('correta')
//             this.Totalpontos++
//             this.mostrarresposta(true)
        
//     }
//     else {
//         console.log ('errada')
//         this.mostrarresposta(false)

//     }
//     this.atualizapontos()
//     this.proximaperg()
//     this.mostrarquestao(perguntas[this.Atualpos])
// },
// mostrarresposta: function(correto){
//     let resultDiv = document.getElementById('result');
//     let result = '';
//     //formatar como a mensagens será exibida
//     if (correto) {
//         result = 'Resposta Correta';
//     }
//     else {
//         //obtendo a questão atual
//         let pergunta = perguntas[this.Atualpos];
//         //obtenha o indice da resposta correta da questão atual
//         let cindice = pergunta.correta;
//         //obtendo o texto da resposta correta da questão atual
//         let ctexto = pergunta.alternativas[cindice];
//         result = `Incorreto! Reposta Correta: ${ctexto}`;
//     }
//     resultDiv.textContent = result;
// },
// atualizapontos: function () {
//     let scorediv = document.getElementById('pontos')
//     scorediv.textContent = `sua pontuação é ${this.Totalpontos}`
// }


// }
// app.start();

let perguntas = [
    {
        titulo: 'Peça uma comida',
        alternativas: ['I want a cheeseburger', 'I would like a cheeseburger', 'i have a cheeseburger', 'I would don´t like a cheeseburger'],
        correta: 1
    },
    {
        titulo: 'Pedir uma localização',
        alternativas: ['Where is Disney World','What is disneyworld', 'how is disneyworld', 'i love you'],
        correta: 0
    },
    {
        titulo: 'Verificar preço',
        alternativas: ['where is price', 'why is price', 'Who is price', 'What is price?'],
        correta: 3
    },
    {
        titulo: 'Falar que a comida ta boa',
        alternativas: ['is very good', 'i dont like', 'i hated','i loved'],
        correta: 0
    },
    {
        titulo: 'Sun',
        alternativas: ['Chuva', 'Nuvem', 'Sol', 'Estrela'],
        correta: 2
    },
    {
        titulo: 'Car',
        alternativas: ['Avião', 'Barco', 'Carro', 'Bicicleta'],
        correta: 2
    },
    {
        titulo: 'Banana',
        alternativas: ['Maçã', 'Banana', 'Laranja', 'Abacaxi'],
        correta: 1
    },
    {
        titulo: 'Chair',
        alternativas: ['Sofá', 'Cama', 'Mesa', 'Cadeira'],
        correta: 3
    },
    {
        titulo: 'Book',
        alternativas: ['Jornal', 'Revista', 'Livro', 'Carta'],
        correta: 2
    },
    {
        titulo: 'Computer',
        alternativas: ['Telefone', 'Tablet', 'Computador', 'Calculadora'],
        correta: 2
    }
];
let app = {
    start: function () {
        this.Atualpos = 0;
        this.Totalpontos = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);

    },
    mostraquestao: function (q) {
        this.qatual = q;
        //mostrando o título
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function (element, index) {
            element.textContent = q.alternativas[index];

        })
    },

    Proximaperg: function () {
        this.Atualpos++;
        if (this.Atualpos == perguntas.length) {
            this.Atualpos = 0;
        }
    },

    checaResposta: function (user) {
        this.Atualperg = perguntas[this.Atualpos];
        if (this.qatual.correta == user) {
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else {
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    atualizaPontos: function () {
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    },


    mostraresposta: function(correto){
        let resultDiv = document.getElementById('result');
        let result = '';
        //formatar como a mensagens será exibida
        if (correto) {
            result = 'Resposta Correta';
        }
        else {
            //obtendo a questão atual
            let pergunta = perguntas[this.Atualpos];
            //obtenha o indice da resposta correta da questão atual
            let cindice = pergunta.correta;
            //obtendo o texto da resposta correta da questão atual
            let ctexto = pergunta.alternativas[cindice];
            result = `Incorreto! Reposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    }



}
app.start();
  