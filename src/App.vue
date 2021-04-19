<template>
  <MainNav />  
    <div class="md:px-4 xl:px-16 bg-gray-100 mb-20">
        <div class="grid grid-cols-12 pt-8 px-2 bg-white max-w-screen-2xl mx-auto
             rounded-md mt-2">
            <SideNav class="col-span-2 absolute xl:static xl:block z-50 h-full
                 max-w-xs top-0" 
                style="left: -100%"/>
            <Home class="col-span-12 xl:col-span-10 z-40 " />
        </div>
    </div>
    
</template>

<script>
import Home from './views/Home.vue';
import MainNav from './views/MainNav.vue';
import SideNav from './views/SideNav.vue';
export default {
    data() {
        return {
          isSideNavVisible: false  
      }
    },      
    name: 'App',
    components: {
      Home,
      MainNav,
      SideNav
    },
    mounted(){
        this.checkInitialSideNavState();  
    },
    methods:{
        checkInitialSideNavState(){
            var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            var isInLargeScreen = screenWidth > 1279;
            if(isInLargeScreen){
               this.isSideNavVisible = true; 
            }
        }
    }
}
</script>


