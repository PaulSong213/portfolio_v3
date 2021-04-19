<template>
    <section class="h-screen xl:h-full w-full p-2 bg-white rounded-md overflow-auto
             shadow-2xl border border-gray-300 xl:border-opacity-0 xl:overflow-visible">
        <h1 class="text-xl  my-4 select-none">Quick Navigation</h1>
        
        <div class="flex flex-col space-y-3"
             >
            <div class="bg-green-100 w-full rounded-md px-2 py-4 
                cursor-pointer transform-gpu hover:scale-105
                hover:shadow-sm hover:bg-green-200 transition-all group active:bg-green-300"
                v-for="(nav, index) in navigationLinks"
                :key="index">
                <a :href="nav.link" target="_blank"
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
                 transition-all w-48"  style="height: max-content"
                 v-for="(nav, index) in bigNavigationLinks"
                 :key="index">
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
                    {title: "Latest Project" , icon: "globe-outline",link:"http://clinic-songalia.epizy.com/?i=1" },
                    {title: "Download my CV" , icon: "document",link:"" },
                    {title: "Fork this Website" , icon: "logo-github",link:"https://github.com/PaulSong213/portfolio_v3/tree/master" },
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

