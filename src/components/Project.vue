<template>
    <section class="max-w-full">
        <div class="grid grid-cols-12 relative p-2 w-full max-w-lg mx-auto gap-1 group  transition-all my-auto" v-if="!isMoreInfoOpened">
            <div class="w-full h-4/6 bg-projects absolute top-1/2  transform -translate-y-1/2 z-10 rounded-xl group-hover:shadow-xl transition-all">
            </div>
            <div class="h-full z-20 flex flex-col justify-center col-span-3 md:col-span-4">
                <div class="h-4/6 flex flex-col justify-center cursor-pointer" v-on:click="toggleMoreInfo()">
                    <h1 class="text-lg sm:text-2xl  font-bold tracking-wider text-gray-800 transition-all select-none group-hover:underline">
                        {{title}}
                    </h1>
                </div>
            </div>
            <div class="z-20 col-span-8 md:col-span-7 cursor-pointer" v-on:click="toggleMoreInfo()">
               <div class="w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-blue-500 bg-gradient-to-b from-green-300 via-blue-400 to-green-300">
                    <img :src="require('@/assets/img/projects/' + imageThumbnail)" class="select-none min-h-full min-w-full"/>
               </div>
            </div>
            <div class="h-full z-20 flex flex-col justify-center col-span-1">
                <div class="h-4/6 block my-auto">
                    <div class="h-full  flex flex-col space-y-2 justify-end">
                        <!--Website URL-->
                        <a @mouseenter="toggleActionTooltip(1)" @mouseleave="toggleActionTooltip()" v-if="url" :href="url" target="_blank" class="table mx-auto text-2xl cursor-pointer transform hover:scale-110 select-none relative">

                            <transition name="fade-left">
                                <div v-if="actionToolTip === 1" class="bg-projects rounded-md shadow-lg p-1 absolute right-7 w-40 -top-1  transition-all hidden md:block">
                                    <h6 class="text-xs text-center font-black">Visit Live Demo</h6>
                                </div>
                            </transition>
                            <ion-icon name="globe-outline"></ion-icon>
                        </a>

                        <!--Website File-->
                        <a  @mouseenter="toggleActionTooltip(2)" @mouseleave="toggleActionTooltip()" v-if="file" :href="file" target="_blank" class="table mx-auto text-2xl cursor-pointer transform hover:scale-110 select-none">
                            <transition name="fade-left">
                                <div v-if="actionToolTip === 2" class="bg-projects rounded-md shadow-lg p-1 absolute right-7 w-40 -top-1  transition-all hidden md:block">
                                    <h6 class="text-xs text-center font-black">View Source Code</h6>
                                </div>
                            </transition>
                            <ion-icon name="folder-outline"></ion-icon>
                        </a>

                        <!-- Buy Project -->
                        <a  @mouseenter="toggleActionTooltip(3)" @mouseleave="toggleActionTooltip()" v-if="buyProject" :href="buyProject" target="_blank" class="table mx-auto text-2xl cursor-pointer transform hover:scale-110 select-none">
                            <transition name="fade-left">
                                <div v-if="actionToolTip === 3" class="bg-projects rounded-md shadow-lg p-1 absolute right-7 w-40 -top-1  transition-all hidden md:block">
                                    <h6 class="text-xs text-center font-black">Buy Project</h6>
                                </div>
                            </transition>
                            <ion-icon name="cart-outline"></ion-icon>
                        </a>

                        <!--Heart Count-->
                        <div class="flex justify-center flex-col-reverse" @mouseenter="toggleActionTooltip(4)" @mouseleave="toggleActionTooltip()">
                            
                            <h1 v-if="!isUserHearted"
                                v-on:click="hearthProject(true)"
                                class="text-sm md:text-base table mx-auto">
                                <span v-if="heartCounts > 0">{{heartCounts}}</span>
                            </h1>
                            <h1 v-else v-on:click="hearthProject(false)" class="text-sm md:text-base table mx-auto">
                                <span>{{heartCountIfHearted}}</span>
                            </h1>
                            <div v-on:click="hearthProject(true)" v-if="!isUserHearted" class="table mx-auto text-lg md:text-2xl cursor-pointer transform hover:scale-110 select-none hover:text-red-500">
                                <transition name="fade-left">
                                    <div v-if="actionToolTip === 4" class="bg-projects rounded-md shadow-lg p-1 absolute right-7 w-40 -top-1  transition-all hidden md:block">
                                        <h6 class="text-xs text-black text-center font-black">Like Project</h6>
                                    </div>
                                </transition> 
                                <ion-icon name="heart-outline"> </ion-icon>
                            </div>
                            <div v-on:click="hearthProject(false)"  v-else class="table mx-auto text-lg md:text-2xl text-red-500 cursor-pointer transform hover:scale-110 select-none">
                                <ion-icon   name="heart"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="bg-white rounded-md shadow-xl  py-1 px-2 md:py-2  md:px-4 border 
            border-gray-200 sm:max-w-md md:max-w-lg mx-auto">
            <div class="flex justify-between mb-5">
                <h5 class="table my-auto text-base font-bold text-green-700">{{title}}</h5>
                <h6 class="bg-green-600 cursor-pointer w-max rounded-full text-white font-black select-none hover:bg-green-700 transform active:scale-110 px-2 flex justify-center bg-opacity-60" v-on:click="toggleMoreInfo(false)">
                    <ion-icon name="arrow-back-outline" class="table my-auto"></ion-icon>
                </h6>
            </div>
            <carousel :items-to-show="1.05"  :wrap-around="true">
                <slide v-for="image in images"
                 :key="image.id"
                 >
                  <div class="rounded-md shadow-xl overflow-hidden relative max-w-full w-full bg-blue-500 bg-gradient-to-b from-green-300 via-blue-400 to-green-300 h-52 sm:h-56">
                      <img :src="require( '@/assets/img/projects/' + image.fileName )"
                       class="select-none min-h-full min-w-full"/>
                  </div>
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
                        <p class="text-sm md:text-base table my-auto text-gray-100">
                       {{tool.title}}</p>
                    </div>
                    <div v-for="set in tool.skillSet" :key="set.id"
                        class="w-28 p-1 md:p-2 bg-green-200">
                        <p class="text-sm md:text-base table my-auto text-gray-700">
                       {{set.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
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
                actionToolTip : 0,
                isMoreInfoOpened: false
            }
        },
        emits : ['toggleHeartProject'],
        props: {
            key:Number,
            id:Number,
            title:String,
            url: String,
            file:String,
            buyProject : String,
            imageThumbnail:String,
            heartCounts: {Number, default: 0},
            images: Array,
            tools: Array,
            isUserHearted : Boolean,
        },
        methods: {
            hearthProject(willHeart = true){
                this.$emit('toggleHeartProject',willHeart,this.id);
            },
            toggleActionTooltip(tooltipCount = 0){
                this.actionToolTip = tooltipCount;
            },
            toggleMoreInfo(newInfoState = true){
                this.isMoreInfoOpened = newInfoState;
            },
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

