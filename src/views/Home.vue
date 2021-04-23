<template>
    <section class="px-1 md:px-4">
        <div class="mb-8" v-if="projectThumbnails"
             id="projects">
            <SectionTitle :title="'PROJECTS'" />
            <div class="grid  md:grid-cols-2  gap-2 xl:gap-8 w-full auto-rows-max
                 overflow-hidden px-4">
                <Project
                v-for="project in projectThumbnails"
                :key="project.id"
                :id="project.id"
                :title="project.title"
                :url="project.url"
                :file="project.file"
                :image-thumbnail="project.imageThumbnail"
                :heart-counts="project.heartCount"
                :images="project.images"
                :tools="project.tools"
                />
            </div>
        </div>
        <div class="bg-white p-1 rounded-md mb-8 border border-gray-100
             shadow-lg"
            id="skills">
            <SectionTitle :title="'SKILLS'" class="mt-4 mb-8" />
            <SkillTab :skills="portfolioData.skills"/>
        </div>
        <div
            id="about-me">
            <Footer :contacts="portfolioData.contacts" />
        </div>
    </section>
</template>

<script>
    import Project from '@/components/Project.vue';
    import SectionTitle from '@/components/SectionTitle.vue';
    import SkillTab from '@/components/SkillTab.vue';
    import Footer from '@/views/Footer.vue';
    import PortfolioData from '@/assets/portfolioData.json';
    export default {
        data() {
            return {
                portfolioData: Array(),
                projectThumbnails: Array(),
            }
        },
        components: {
            Project,
            SkillTab,
            SectionTitle,
            Footer
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
                this.projectThumbnails = newData.projects;
            }
        }
    };
</script>

