<template>
    <section class="bg-footer grid md:grid-cols-2 gap-2 rounded-md">
        <div class="flex flex-col justify-end space-y-4 md:pl-6 row-start-2 
             md:row-start-auto pb-0 md:pb-5">
            <h1 class="text-3xl md:text-4xl lg:text-5xl select-none text-center 
                md:text-right">John Paul Songalia</h1>
            <h3 class="text-lg md:text-xl lg:text-2xl select-none text-center 
                md:text-right">WEB DEVELOPER</h3>
        </div>
        <div class="row-start-1 md:row-start-auto">
            <img src="@/assets/img/hero.png" class="select-none mx-auto hero-image" />
        </div>
        <div class="px-10 row-start-3 md:row-start-auto pt-10 md:pt-0 cols-span-1 md:col-span-2 pt-5">
            <div class="max-w-xl mx-auto">
                <p class="text-justify text-sm md:text-base">Hope you liked my works,
                if you have suggestions or feedback <a href="mailto: songaliajohnpaul@gmail.com"
                            class="text-green-300 font-bold">let me know</a>.
                By the way you can call me 'Paul', a computer science
                student from CvSU - Bacoor. I enjoy learning technologies related 
                to programming especially web development both Backend and Frontend.
                Good day,thanks for the visit! </p>
                <div class="my-5 border border-gray-100 p-2 rounded-md flex space-x-4">
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

