<template>
    <section>
        <div class="grid grid-cols-12 relative p-2 w-full max-w-lg mx-auto gap-1
             group  transition-all my-auto"
             v-if="!isMoreInfoOpened"
             >
            <div class="w-full h-4/6 bg-projects absolute top-1/2  transform
                 -translate-y-1/2 z-10 rounded-xl group-hover:shadow-xl
                  transition-all"
                 >
            </div>
            <div class="h-full z-20 flex flex-col justify-center col-span-3
                 md:col-span-4"
                 >
                <div class="h-4/6 flex flex-col justify-center cursor-pointer"
                     v-on:click="toggleMoreInfo()">
                    <h1 class="text-lg sm:text-2xl  font-black tracking-wider 
                        text-gray-800 transition-all
                        select-none group-hover:underline">
                        {{title}}</h1>
                </div>
            </div>
            <div class="z-20 col-span-8 md:col-span-7 cursor-pointer"
                 v-on:click="toggleMoreInfo()">
                <img :src="require('@/assets/img/projects/' + imageThumbnail)" 
                     class="rounded-xl select-none w-full"/>
            </div>
            <div class="h-full z-20 flex flex-col justify-center col-span-1">
                <div class="h-4/6 block my-auto">
                    <div class="h-full  flex flex-col space-y-4 justify-end">
                        <!--Website URL-->
                        <a v-if="url"
                           :href="url" target="_blank">
                            <ion-icon v-pre name="globe-outline" 
                                class="table mx-auto text-2xl cursor-pointer 
                                transform hover:scale-110 select-none">
                            </ion-icon>
                        </a>
                        <!--Website File-->
                        <a v-if="file"
                            :href="file" target="_blank">
                            <ion-icon v-pre name="folder-outline" 
                                class="table mx-auto text-2xl cursor-pointer
                                transform hover:scale-110 select-none">
                            </ion-icon>
                        </a>
                        <!--Heart Count-->
                        <div class="flex justify-center flex-col-reverse hidden">
                            
                            <h1 v-if="!isUserHearted"
                                v-on:click="hearthProject(true)"
                                class="text-sm md:text-base table mx-auto">
                                <span v-if="heartCounts > 0">{{heartCounts}}</span>
                            </h1>
                            <h1 v-else
                                v-on:click="hearthProject(false)"
                                class="text-sm md:text-base table mx-auto">
                                <span>{{heartCountIfHearted}}</span>
                            </h1>
                            <div v-on:click="hearthProject(true)"
                                 v-if="!isUserHearted">
                                <ion-icon v-pre name="heart-outline" 
                                    class="table mx-auto text-lg md:text-2xl cursor-pointer
                                    transform hover:scale-110 select-none">
                                </ion-icon>
                            </div>
                            <div v-on:click="hearthProject(false)"  v-else>
                                <ion-icon  v-pre name="heart" 
                                    class="table mx-auto text-lg md:text-2xl text-red-500
                                    cursor-pointer transform hover:scale-110 select-none">
                                </ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else
            class="bg-white rounded-md shadow-xl  p-1 md:py-2  md:px-4 border 
            border-gray-200">
            <div class="flex justify-between mb-5">
                <h1 class="table my-auto text-base font-bold">{{title}}</h1>
                <h3 class="bg-green-600 rounded-md cursor-pointer w-max rounded-full
                text-white font-black select-none hover:bg-green-700
                transform active:scale-110 px-2 flex justify-center bg-opacity-60"
                v-on:click="toggleMoreInfo(false)">
                    <ion-icon name="arrow-back-outline"
                              class="table my-auto"></ion-icon>
                </h3>
            </div>
            <carousel :items-to-show="1.1"  :wrap-around="true">
                <slide v-for="image in images"
                 :key="image.id"
                 >
                  <img :src="require( '@/assets/img/projects/' + image.fileName )"
                       class="rounded-md mx-2 shadow-xl select-none"/>
                </slide>

                <template #addons>
                  <Navigation />
                  <pagination class="mt-3" />
                </template>
            </carousel>
            <div class="my-4 border bg-green-100 rounded-md overflow-hidden">
                <div class="flex "
                    v-for="tool in tools" :key="tool.id">
                    <div class="w-28 p-1 md:p-2 bg-green-500">
                        <h1 class="text-sm md:text-base table my-auto text-gray-100">
                       {{tool.title}}</h1>
                    </div>
                    <div v-for="set in tool.skillSet" :key="set.id"
                        class="w-28 p-1 md:p-2 bg-green-200">
                        <h1 class="text-sm md:text-base table my-auto text-gray-700">
                       {{set.title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    import axios from 'axios';
    //import $ from 'jquery'
    export default {
        name: 'Project',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        data() {
            return {
                isUserHearted: false,
                isMoreInfoOpened: false
            }
        },
        props: {
            key:Number,
            id:Number,
            title:String,
            url: String,
            file:String,
            imageThumbnail:String,
            heartCounts: {Number, default: 0},
            images: Array,
            tools: Array
        },
        methods: {
            hearthProject(willHeart = true){
                this.isUserHearted = willHeart;
                this.testHeart();
            },
            toggleMoreInfo(newInfoState = true){
                this.isMoreInfoOpened = newInfoState;
            },
            testHeart(){
                const params = new URLSearchParams();
                params.append('param1', 'value1');
                params.append('param2', 'value2');
                axios.post('/db.json', params);
            }
        },
        computed: {
            heartCountIfHearted(){
                return this.heartCounts + 1;
            }
        }
    };
</script>
<style>
    .carousel__pagination-button{
        height: 5px;
        width: 5px;
        border-radius: 50%;
        background-color: rgba(4,120,87,0.8);  
    }
    .carousel__pagination-button--active{
        height: 7px;
        width: 6px;
        background-color: rgba(4,120,87,1);          
    }
    .carousel__prev,
    .carousel__next{
        background-color: rgba(4,120,87,0.6);       
    }
</style>

