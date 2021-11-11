<template>
  <MainNav />  
    <div class=" bg-gray-100" style="padding: 0 2vw">
        <div class="grid grid-cols-12 pt-8 mx-auto w-full rounded-md mt-2 relative px-2 bg-white gap-10">
            <transition name="pop">
            <SideNav v-if="isSideNavVisible" 
                class="col-span-2 absolute xl:static xl:block z-50 h-full
                  max-w-md top-0 w-screen-70 left-0" 
                />
            </transition>
            <Home class="col-span-12 xl:col-span-10 z-40 " 
                  v-on:click="manualToggleSideNav(false)"/>
        </div>
    </div>
    
</template>

<script>
import Home from './views/Home.vue';
import MainNav from './components/MainNav.vue';
import SideNav from './components/SideNav.vue';
export default {
    data() {
        return {
          isSideNavVisible : false,
          prevScreenSize: 0
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
        window.addEventListener("resize",this.autoToggleSideNav);
    },
    unmounted(){
        window.removeEventListener("resize",this.autoToggleSideNav);
    },
    methods:{
        checkInitialSideNavState(){
            if(window.innerWidth > 1279){
               this.isSideNavVisible = true; 
            }
        },
        autoToggleSideNav(){
            const isAtSmallerScreen = window.innerWidth <= 1279;
            const isFromLargeScreen = window.innerWidth < this.prevScreenSize;
            if(isAtSmallerScreen && isFromLargeScreen){
                this.isSideNavVisible = false;
            }else if(!isAtSmallerScreen && !isFromLargeScreen){
                this.isSideNavVisible = true;
            }
            this.prevScreenSize = window.innerWidth;
        },
        manualToggleSideNav(willOpenNav = false){
            const isAtSmallerScreen = window.innerWidth <= 1279;
            if(isAtSmallerScreen)this.isSideNavVisible = willOpenNav;
        }
        
    },
    computed:{
        
    }
}
</script>
<style scoped>
    @media only screen and (max-width: 1279px) {
        .w-screen-70{
            width: 70vw;
        }
    }
    .pop-enter-active,
    .pop-leave-active {
      transition: all 500ms ease-in-out;
    }

    .pop-enter-from,
    .pop-leave-to {
        transform: scale(0);   
        left: -100%;
        opacity: 0;
    }
    
</style>

