new Vue({
    el:'#desafio',
    data: {
        nome: 'Wendel',
        idade: 41,
        imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        idadeVezes3(){
            return this.idade *3
        },

        randonizando(){
            return Math.random() 
        }
    }
})