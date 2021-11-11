<template>
    <section v-for="skill in skills"
            :key="skill.id"
            class="mb-3 md:mb-0 bg-white"
            >
        <div class="flex flex-col md:flex-row  space-x-2 space-y-1 md:space-y-0 mb-3">
        <a :href="skill.descriptionLink" target="_blank"
            :title=" 'Click to know more about ' + skill.title "
            class="w-max">
                <div class="bg-green-400 bg-gradient-to-r from-green-200 to-green-400
                    w-44 p-2 flex space-x-4 rounded-md cursor-pointer transform hover:scale-105
                    active:scale-100">

                   <img class="w-8 h-8 opacity-90 select-none" :src=" require('@/assets/img/skills/' + skill.logo )" />
                   <h1 class="text-xs font-bold table my-auto select-none text-green-900">
                       {{skill.title}}</h1>
                </div>
   
        </a>
     
        <div v-for="set in skill.skillSet"
             :key="set.id"
             class="max-w-max">
            <a :href="set.descriptionLink" target="_blank"
               :title=" 'Click to know more about ' + set.title "
               class="max-w-max">    
                <div class="bg-blue-400 bg-gradient-to-r from-blue-300 to-blue-500
                    w-48 p-2 flex space-x-4 rounded-md cursor-pointer transform hover:scale-105
                    active:scale-100 ml-14 md:ml-0">
                   <img class="w-8 h-8 opacity-90 select-none" :src=" require('@/assets/img/skills/' + set.logo )" />
                   <h1 class="text-xs font-bold table my-auto select-none text-green-900">
                       {{set.title}}</h1>
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
                
            }
        },
        props: {
            skills: Array
        }
    };
</script>

