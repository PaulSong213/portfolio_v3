<template>
    <section>
        <div class="flex space-x-4 mb-3"
            v-for="skill in skills"
            :key="skill.id">
            <div class="bg-green-400 bg-gradient-to-r from-green-200 to-green-400
                w-40 p-2 flex space-x-4 rounded-md cursor-pointer transform hover:scale-105
                active:scale-100">
                
               <img class="w-8 h-8 opacity-90" :src=" require('@/assets/img/skills/' + skill.logo )" />
               <h1 class="text-lg font-bold table my-auto select-none text-green-900">
                   {{skill.title}}</h1>
            </div>
            <div v-for="set in skill.skillSet"
                 :key="set.id">
                <div class="bg-blue-400 bg-gradient-to-r from-blue-300 to-blue-500
                    w-40 p-2 flex space-x-4 rounded-md cursor-pointer transform hover:scale-105
                    active:scale-100">
                   <img class="w-8 h-8 opacity-90" :src=" require('@/assets/img/skills/' + set.logo )" />
                   <h1 class="text-lg font-bold table my-auto select-none text-green-900">{{set.title}}</h1>
                </div>
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

