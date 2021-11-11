<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <div v-for="(certificate, index) in certificates" :key="index" class="bg-white rounded-md shadow-xl  py-1 px-2 md:py-2  md:px-4 border border-gray-200 md:max-w-lg mx-auto w-full max-w-sm">
            <carousel :items-to-show="1.05"  :wrap-around="true">
                <slide v-for="image in certificate.images" :key="image.id">
                  <div class="rounded-md shadow-xl overflow-hidden relative max-w-full w-full bg-blue-500 bg-gradient-to-r from-green-300 via-blue-200 to-green-300 h-52 sm:h-56">
                      <img :src="require( '@/assets/img/certificates/' + image )" class="absolute min-h-full w-auto mx-auto h-full left-1/2 transform -translate-x-1/2"/>
                  </div>
                </slide>

                <template #addons>
                  <pagination class="mt-3" />
                </template>
            </carousel>
            <div class="my-4 rounded-md overflow-hidden px-2">
                <h5 class="table my-auto text-base font-bold text-green-700 my-3 text-center w-full">{{certificate.title}}</h5>
                <p class="text-sm text-gray-700 mt-3">
                  {{certificate.description}}
                </p>
            </div>
        </div>
  </section>
</template>

<script>
 import { Carousel, Slide, Pagination } from 'vue3-carousel';
export default {

  data() {
    return {
    
    }
  },
  props : {
    certificates : Array()
  },
  components: {
      Carousel,
      Slide,
      Pagination,
  },   
}
</script>

<style>

</style>