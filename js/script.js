
const app = new Vue({

    el: '#app',

    data:{
        menu_close: false,
        
    },

    methods:{

        toggleMenu(){
            if(this.menu_close === true){
                this.menu_close = false;
            } else {
                this.menu_close = true;
            }
        }
    }
})