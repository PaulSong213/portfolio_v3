<template>
    <section class="bg-footer grid md:grid-cols-2 gap-2 rounded-md">
        <div class="flex flex-col justify-center space-y-4 md:pl-6 row-start-2 
             md:row-start-auto">
            <h1 class="text-3xl md:text-4xl lg:text-5xl select-none text-center 
                md:text-left">John Paul Songalia</h1>
            <h3 class="text-lg md:text-xl lg:text-2xl select-none text-center 
                md:text-left">WEB DEVELOPER</h3>
        </div>
        <div class="row-start-1 md:row-start-auto">
            <img src="@/assets/img/hero.png" class="select-none mx-auto hero-image" />
        </div>
        <div class="px-10 row-start-3 md:row-start-auto pt-10 md:pt-0">
            <p class="text-justify text-sm md:text-base">Hope you liked my works,
                if you have suggestions or feedback let me know.
            By the way you can call me 'Paul', a computer science
           student from CvSU - Bacoor. I enjoy learning technologies related 
           to programming especially web development both Backend and Frontend.
           Good day,thanks for the visit! </p>
        </div>
        <div class="border border-gray-100 rounded-md p-4 mx-4 mb-4 row-start-4 md:row-start-auto">
            <div class="grid md:grid-cols-12">
                <div class=" md:col-span-11 flex flex-col space-y-4 pr-8">
                    <h1 class="text-gray-400 text-xl">Leave some words</h1>
                    
                    <div>
                        <h6 class="text-sm">Name</h6>
                        <input type="text" class="rounded-md p-2 w-full">
                    </div>
                    <div>
                        <h6 class="text-sm">Feedback</h6>
                        <textarea rows="2" 
                            class="rounded-md p-2 w-full"></textarea>
                       
                    </div>
                    
                    <div class="table mx-auto bg-blue-500 py-2 px-6 rounded-md
                         cursor-pointer hover:bg-blue-600 select-none transform
                         active:scale-105">
                        <h3>Submit</h3>
                    </div>
                </div>
                <div class="md:col-span-1 flex md:flex-col md:space-y-4 space-x-2
                     md:space-x-0 md:justfify-center  pt-5 md:pt-0">
                    <div v-for="contact in contacts"
                         :key="contact.id">
                        <a :href="contact.link" target="_blank" 
                            :title=" 'Find me at' + contact.title "
                            class="transform hover:scale-110 transition-all">
                             <ion-icon :name="contact.logo" class="text-4xl">
                             </ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props:{
            contacts:Array
        }
    };
</script>
<style scoped>
    h1,h2,h3,h3,h5,h6,p,ion-icon{
        color: #ffffff;
    }
    ion-icon{
        pointer-events: none;
    }
    .hero-image{
       animation-name: changeColor;
       animation-duration: 5000ms;
       animation-iteration-count: infinite;
       animation-timing-function: ease-in-out;
    }
    @keyframes changeColor{
        from {filter: hue-rotate(0deg);}
        to {filter: hue-rotate(360deg);}
    }
</style>

