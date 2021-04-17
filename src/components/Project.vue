<template>
    <section>
        <div class="grid grid-cols-12 relative p-2 w-full max-w-lg mx-auto gap-1"
             v-if="id">
            <div class="w-full h-4/6 bg-projects absolute top-1/2  transform
                 -translate-y-1/2 z-10 rounded-xl">
            </div>
            <div class="h-full z-20 flex flex-col justify-center col-span-3 md:col-span-4">
                <div class="h-4/6 flex flex-col justify-center">
                    <h1 class="text-lg sm:text-2xl  font-black tracking-wider 
                        text-gray-800">
                        {{title}}</h1>
                </div>
            </div>
            <div class="z-20 col-span-8 md:col-span-7">
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
                        <div class="flex justify-center">
                            
                            <h1 v-if="!isUserHearted" 
                                class="text-base">
                                <span v-if="heartCounts > 0">{{heartCounts}}</span>
                            </h1>
                            <h1 v-else
                                class="text-base">
                                <span>{{heartCountIfHearted}}</span>
                            </h1>
                            <div v-on:click="hearthProject(true)"
                                 v-if="!isUserHearted">
                                <ion-icon v-pre name="heart-outline" 
                                    class="table mx-auto text-2xl cursor-pointer
                                    transform hover:scale-110 select-none">
                                </ion-icon>
                            </div>
                            <div v-on:click="hearthProject(false)"  v-else>
                                <ion-icon  v-pre name="heart" 
                                    class="table mx-auto text-2xl text-red-500
                                    cursor-pointer transform hover:scale-110 select-none">
                                </ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Project',    
        data() {
            return {
                isUserHearted: false,
            }
        },
        props: {
            key:Number,
            id:Number,
            title:String,
            url: String,
            file:String,
            imageThumbnail:String,
            heartCounts: {Number, default: 0}
        },
        methods: {
            hearthProject(willHeart = true){
                this.isUserHearted = willHeart;
            },
        },
        computed: {
            heartCountIfHearted(){
                return this.heartCounts + 1;
            }
        }
    };
</script>

