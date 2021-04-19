<template>
    <section class="shadow-lg bg-white">
        <div class="flex justify-between px-4 py-4 max-w-screen-2xl mx-auto">
            <div class="md:hidden flex">
                <ion-icon name="menu-outline" class="text-4xl table my-auto
                    cursor-pointer hover:text-green-700"></ion-icon>
            </div>
            <div>
                <a href="/">
                    <img src="@/assets/img/songalia-logo.png"
                     class="w-14 h-14 cursor-pointer select-none">
                </a>
            </div>
            <div class="justify-between space-x-4 border border-blue-300 p-2
                 rounded-md cursor-pointer hover:bg-blue-100 hidden md:flex">
                <a href="mailto: songaliajohnpaul@gmail.com"
                   class="flex space-x-4">
                    <h2 class=" text-blue-500 text-xs md:text-base select-
                        table my-auto select-none"
                    >songaliajohnpaul@gmail.com</h2>
                    <img src="@/assets/img/profile.jpg" 
                         class="w-10 h-10 rounded-full"/>
                </a>
            </div>
            <div class="md:hidden">
                <a href="mailto: songaliajohnpaul@gmail.com"
                    class="table my-auto">
                 <img src="@/assets/img/profile.jpg" 
                      class="w-14 h-14 rounded-full table my-auto select-none"/>
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

