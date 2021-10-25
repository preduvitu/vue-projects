let app = new Vue({
    el:'#app',
    data:{
       nome:'Jose',
       idade:30
   },
   methods:{
       mostrar:(nome)=>{
           let txt = 'Olá, '+nome;
           return txt; 
       }
   }
});