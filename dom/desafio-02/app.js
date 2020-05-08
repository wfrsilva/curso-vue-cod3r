new Vue({
    el: '#desafio2',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Botão foi clicado!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})