<template>
  <MainNav />  
    <div class="px-16 bg-gray-100">
        <div class="grid grid-cols-12 pt-8 px-2 bg-white max-w-screen-2xl mx-auto
             rounded-md mt-2">
            <SideNav class="col-span-2 "/>
            <Home class="col-span-10"/>
            
        </div>
    </div>
  
</template>

<script>
import Home from './views/Home.vue';
import MainNav from './views/MainNav.vue';
import SideNav from './views/SideNav.vue';
export default {
  name: 'App',
  components: {
    Home,
    MainNav,
    SideNav
  }
}
</script>


