<template>
    <section class="">
        <div class="mb-8" v-if="projectThumbnails" id="projects">
            <SectionTitle :title="'PROJECTS'" />
            <div class="grid  grid-cols-1 lg:grid-cols-2  gap-8 md:gap-2 xl:gap-8 w-full auto-rows-max overflow-hidden px-1">
                <Project
                v-for="project in sortedHeartProjectThumbnails"
                :key="project.id"
                :id="project.id"
                :title="project.title"
                :url="project.url"
                :file="project.file"
                :image-thumbnail="project.imageThumbnail"
                :heart-counts="project.heartCount"
                :images="project.images"
                :tools="project.tools"
                :buy-project="project.buyProject"
                :is-user-hearted="project.isUserHearted"
                @toggleHeartProject="(willHeart,id)=>toggleHeartProject(willHeart,id)"
                />
            </div>
        </div>
        <div class="px-1 rounded-md mb-8" id="skills">
            <SectionTitle :title="'SKILLS'" class="mt-4 mb-8" />
            <div class="pl-2">
                <SkillTab :skills="portfolioData.skills"/>
            </div>
        </div>
        <div id="about-me">
            <Footer :contacts="portfolioData.contacts" />
        </div>
    </section>
</template>

<script>
import { getDatabase, ref, child, get,set } from "firebase/database";

import Project from '@/components/Project.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SkillTab from '@/components/SkillTab.vue';
import Footer from '@/components/Footer.vue';
import PortfolioData from '@/assets/portfolioData.json';
export default {
    data() {
        return {
            deviceId : null,
            portfolioData: Array(),
            projectThumbnails: {},
            isCardSortedOnce : false
        }
    },
    components: {
        Project,
        SkillTab,
        SectionTitle,
        Footer
    },
    mounted(){
        this.test(),
        this.registerIfNewUser(),
        this.getInternalJSONData();  
    },
    methods: {
        toggleHeartProject(willHeart = true,id){
            if(!id)return;
            var project = this.projectThumbnails[id];
            project['isUserHearted'] = willHeart;
            const db = getDatabase();
            var newData = true;
            if(!willHeart)newData = null;
            set(ref(db, `projects/${id}/heartUserIds/${this.deviceId}`), newData)
            .catch((error) => {
                console.error(error);
            });
        },
        setHeartsInfo(){
            const dbRef = ref(getDatabase());
            get(child(dbRef, `projects`))
            .then((snapshot) => {
                const data = snapshot.val();
                for(var id in data){
                    if(data[id].heartUserIds){
                        var project = this.projectThumbnails[id];
                        if(!project)return;
                        project['heartCount'] = Object.keys(data[id].heartUserIds).length;
                        project['isUserHearted'] = data[id].heartUserIds[this.deviceId];
                        if(project['isUserHearted'])project['heartCount']--;
                        // console.log(this.projectThumbnails[id]);
                    }
                }
            }).catch((error) => {
                console.error(error);
            });

        },
        registerUser(){
            const newUniqueId = this.generateDeviceUniqueId();
            const db = getDatabase();
            set(ref(db, `userIds/${newUniqueId}`), true)
            .then((error) => {
            if (!error) {
                localStorage.setItem("deviceId",newUniqueId);
                this.deviceId = newUniqueId;
            } else {
                console.error(error);
            }
            }).catch((error) => {
                console.error(error);
            });
        },
        registerIfNewUser(){
            let deviceId = localStorage.getItem("deviceId");
            if(!deviceId)deviceId = this.generateDeviceUniqueId();
            const dbRef = ref(getDatabase());
            get(child(dbRef, `userIds/${deviceId}` ))
            .then((snapshot) => {
                if(!snapshot.exists()){
                    return this.registerUser();
                }else{
                    this.deviceId = deviceId;
                }
            }).catch((error) => {
                console.error(error);
            });
        },
        generateDeviceUniqueId(){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < 10; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        test(){
            //test codes
        },
        getInternalJSONData(){
            this.portfolioData = PortfolioData;
        }
    },
    computed : {
        sortedHeartProjectThumbnails(){
            var projects = Object.values(this.projectThumbnails);
            var sortable = Array();
            sortable = projects.sort((a, b)=>{
                return a.heartCount - b.heartCount;
            }).reverse();
            return sortable;
        },
        sortedHeartProjectThumbnailsLength(){
            return this.sortedHeartProjectThumbnails.length;
        }
    },
    watch:{
        sortedHeartProjectThumbnailsLength(length){
            if(length > 0)this.setHeartsInfo();
        },
        portfolioData(newData){
            const projects = newData.projects;
            for(var i = 0; i < projects.length;i++){
                const id = projects[i].id;
                this.projectThumbnails[id] = projects[i];
            }
        }
    }
};
</script>

