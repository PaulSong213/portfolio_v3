<template>
  <section class="pl-2">
    <section v-for="contact in contacts" :key="contact.id" class="mb-3 md:mb-0 bg-white inline-block mr-3">
        <div class="flex flex-col md:flex-row  space-x-2 space-y-1 md:space-y-0 mb-3">
          <a :href="contact.link" target="_blank" :title=" 'View my ' + contact.title" class="w-max">
                  <div class="bg-purple-400 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 w-44 p-2 flex space-x-4 rounded-md cursor-pointer transform hover:scale-105 active:scale-100">
                    <ion-icon class="text-4xl text-gray-200" :name="contact.logo"></ion-icon>
                    <h1 class="text-xs text-white font-bold table my-auto select-none">
                        {{contact.title}}
                    </h1>
                  </div>
          </a>
        </div>    
    </section>
  </section>
</template>

<script>
export default {
  props : {
    contacts : Array()
  }
}
</script>

<style>

</style>