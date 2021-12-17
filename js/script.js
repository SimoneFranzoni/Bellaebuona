
const app = new Vue({

    el: '#app',
    data:{
        images: ['./img/photo_section/1.jpg','./img/photo_section/1.jpg','./img/photo_section/2.jpg','./img/photo_section/3.jpg','./img/photo_section/4.jpg'],
        counter: 0
    },

    methods:{
        nextSlide(){
            this.counter++;
            if(this.counter > this.images.length - 1){
                this.counter = 0;
            }
            console.log(this.counter);
        },
    
        prevSlide(){
            this.counter--;
            if(this.counter <= 0){
                this.counter = this.images.length - 1;
            }
            console.log(this.counter);
        }
    }
})