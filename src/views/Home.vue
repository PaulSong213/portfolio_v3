<template>
    <section class="px-4">
        <div class="mb-8" v-if="projectThumbnails">
            <SectionTitle :title="'PROJECTS'" />
            <div class="grid  md:grid-cols-2  gap-2 xl:gap-8 w-full">
                <Project
                v-for="project in projectThumbnails"
                :key="project.id"
                :id="project.id"
                :title="project.title"
                :url="project.url"
                :file="project.file"
                :image-thumbnail="project.imageThumbnail"
                :heart-counts="project.heartCount"
                />
            </div>
        </div>
        <div>
            <SectionTitle :title="'SKILLS'" />
            <SkillTab :skills="skills" />
        </div>
    </section>
</template>

<script>
    import Project from '@/components/Project.vue';
    import SectionTitle from '@/components/SectionTitle.vue';
    import SkillTab from '@/components/SkillTab.vue';
    import PortfolioData from '@/assets/portfolioData.json';
    export default {
        data() {
            return {
                portfolioData: Array(),
                projectThumbnails: Array(),
                skills:Array()
            }
        },
        components: {
            Project,
            SkillTab,
            SectionTitle
        },
        mounted(){
          this.getInternalJSONData();  
        },
        methods: {
            getInternalJSONData(){
               this.portfolioData = PortfolioData;
            }
        },
        watch:{
            portfolioData(newData){
                console.log(newData);
                this.projectThumbnails = newData.projects;
                this.skills = newData.skills;
            }
        }
    };
</script>

