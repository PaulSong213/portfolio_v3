<template>
    <section class="h-screen xl:h-full w-full p-2 xl:p-0  bg-opacity-90 rounded-md overflow-auto border border-gray-300 xl:border-opacity-0 xl:overflow-visible bg-white xl:bg-transparent shadow-xl xl:shadow-none">
        <h1 class="text-lg  my-4 select-none font-bold text-gray-500">Quick Navigation</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1  gap-5 p-2">
            
            <div class="bg-green-100 w-60 max-w-full mx-auto rounded-md px-2 py-4 
                cursor-pointer transform-gpu hover:scale-105
                hover:shadow-sm hover:bg-green-200 transition-all group active:bg-green-300"
                v-for="(nav, index) in navigationLinks"
                :key="index"
                v-on:click="this.$root.manualToggleSideNav(false)">
                
                <a  
                   :href="nav.link" target="_blank"
                   class="w-full flex space-x-4">
                    <div class="bg-green-400 p-1 rounded-md h-8">
                        <ion-icon  :name="nav.icon" class="block my-auto text-2xl
                            text-gray-100 group-hover:shadow-sm">
                        </ion-icon>
                    </div>
                    <h3 class="table my-auto text-sm text-gray-700 select-none
                        group-hover:text-green-700">{{ nav.title }}</h3>
                </a>   
            </div>
               
            <div class="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl 
                 cursor-pointer hover:bg-opacity-80 transform-gpu hover:scale-105
                 transition-all w-48 mx-auto max-w-full"  style="height: max-content"
                 v-for="(nav, index) in bigNavigationLinks"
                 :key="index"
                 v-on:click="this.$root.manualToggleSideNav(false)">
                <a :href="nav.link" class="flex flex-col">
                    <div class="h-32 relative">
                        <img :src="require('@/assets/img/main-button-thumbnail/' + nav.imageThumbnail)"
                             class="object-cover select-none">
                    </div>
                    <div class="bg-blue-500 py-3 relative" style="height: 25%" :class="nav.ColorCode">
                        <h2 class="text-center font-bold text-gray-100 text-base
                            select-none">
                            {{nav.title}}</h2>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                navigationLinks: [
                    {title: "Email Me" , icon: "mail",link:"mailto: songaliajohnpaul@gmail.com" },
                    {title: "Latest Project" , icon: "globe-outline",link:"https://www.talkchats.live/#/sign-in" },
                    {title: "View my CV" , icon: "document",link:"https://docs.google.com/document/d/1KreQyvnczKuA4ZlbIhrWDn8g4DGMnRXEzIuz67pHtnU/edit?usp=sharing" },
                    {title: "Clone this website" , icon: "logo-github",link:"https://github.com/PaulSong213/portfolio_v3/tree/master" },
                ],
                bigNavigationLinks: [
                    {title: "PROJECTS" , colorCode:"bg-blue-300", imageThumbnail:'project.jpg',link:"/#projects" },
                    {title: "SKILLS" , colorCode:"bg-green-300", imageThumbnail:'skills.jpg',link:"/#skills" },
                    {title: "ABOUT ME" , colorCode:"bg-red-300", imageThumbnail:'about-me.jpg',link:"/#about-me" },
                    
                ]
            }
        },
    };
</script>
