<template>
    <section class="shadow-lg bg-white">
        <div class="flex justify-between px-4 py-4 max-w-screen-2xl mx-auto">
            <div class="xl:hidden flex"
                 v-on:click="this.$root.manualToggleSideNav(!this.$root.isSideNavVisible)">
                <div class="w-12 flex relative">
                    <transition name="warp">
                        <span v-if="!this.$root.isSideNavVisible" 
                            class="absolute flex top-1/2 transform 
                            -translate-y-1/2">
                            <ion-icon name="menu-outline" class="text-4xl table my-auto
                            cursor-pointer hover:text-green-700"></ion-icon>
                        </span>
                        <span v-else 
                            class="absolute flex top-1/2 transform
                            -translate-y-1/2">
                            <ion-icon name="close-outline" class="text-4xl table my-auto
                            cursor-pointer hover:text-green-700"></ion-icon>
                        </span>   
                    </transition>
                </div>
                
            </div>
            <div class="flex">
                <a href="/" class="table my-auto">
                    <img src="@/assets/img/songalia-logo.png"
                     class="w-14 h-14 cursor-pointer select-none">
                </a>
            </div>
            <div class="justify-between space-x-4 xl:border border-blue-300 p-2
                 rounded-md cursor-pointer hover:bg-blue-100 flex">
                <a href="mailto: songaliajohnpaul@gmail.com"
                   class="flex space-x-4">
                    <h2 class=" text-blue-500 text-xs md:text-base select-
                        my-auto select-none hidden xl:table"
                    >songaliajohnpaul@gmail.com</h2>
                    <img src="@/assets/img/profile.jpg" 
                         class="xl:w-10 xl:h-10 w-14 h-14  rounded-full select-none"/>
                </a>
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
    };
</script>
<style>
    .warp-enter-active,
    .warp-leave-active {
      transition: all 450ms ease-in-out;
    }

    .warp-enter-from,
    .warp-leave-to {
        opacity: 0;   
        margin-left: -20%;
    }
    
</style>

