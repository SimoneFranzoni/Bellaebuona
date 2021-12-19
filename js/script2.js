const home = new Vue({

    el: '#home',

    data:{
        burger_close: true,
        
    },

    methods:{

        toggleBurger(){
            if(this.burger_close === true){
                this.burger_close = false;
            } else {
                this.burger_close = true;
            }
        }
    }
})