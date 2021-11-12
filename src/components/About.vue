<template>
    <section class="bg-footer grid md:grid-cols-2 gap-2 rounded-md pb-20">
        <div class="flex flex-col justify-end space-y-4 md:pl-6 row-start-2 
             md:row-start-auto pb-0 md:pb-5">
            <h1 class="text-3xl md:text-4xl lg:text-5xl select-none text-center md:text-right">John Paul Songalia</h1>
            <h3 class="text-lg md:text-xl lg:text-2xl select-none text-center 
                md:text-right">WEB DEVELOPER</h3>
        </div>
        <div class="row-start-1 md:row-start-auto">
            <img src="@/assets/img/hero.png" class="select-none mx-auto hero-image" />
        </div>
        <div class="px-5 sm:px-10 row-start-3 md:row-start-auto  md:pt-0 cols-span-1 md:col-span-2 pt-5">
            <div class="max-w-xl mx-auto">
                <!-- github readme will be injected here -->
                <div class="text-white mt-5" v-html="readmeText"></div>

                <p class="text-justify text-md my-4 font-thin mt-14">Hope you liked my works,
                if you have suggestions or feedback <a href="mailto: songaliajohnpaul@gmail.com" class="text-green-300 font-bold">let me know</a>.
                </p>    

                <div class="grid grid-cols-12 gap-2 max-w-xs sm:max-w-full">
                   <div class="flex-col flex col-span-12 sm:col-span-8">
                        <label class="text-xs text-purple-200 uppercase" for="feedbackInput">Feedback</label>
                        <input v-model="feedbackMessage" class="bg-purple-100 py-3 px-2 font-medium rounded-md text-black text-xs placeholder-gray-600" type="text" id="feedbackInput" placeholder="Send feedback  anonymously" >
                   </div>
                   <div class="col-span-12 sm:col-span-4 h-full flex flex-col justify-end">
                       <div v-on:click="sendFeedback()" v-on:mouseover="if(sendFeedbackStatus === 3)sendFeedbackStatus = 0;" class="p-3 bg-purple-900 text-purple-200 rounded-md cursor-pointer hover:bg-purple-800  active:bg-purple-900 select-none text-xs font-bold text-center uppercase">
                            <span v-if="sendFeedbackStatus === 0">Send feedback</span>
                            <span v-else-if="sendFeedbackStatus === 1" >
                                Sending..<ion-icon class="text-white animate-bounce ml-1 -mb-0.5" name="chatbox"></ion-icon>
                            </span>
                            <span v-else>
                                Message Sent<ion-icon class=" text-white ml-1 -mb-0.5" name="checkbox"></ion-icon>
                            </span>
                       </div>
                   </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import { getDatabase, ref,set } from "firebase/database";

    export default {
        data() {
            return {
                feedbackMessage : "",
                sendFeedbackStatus : 0, 
                readmeText : ""
            }
        },
        props:{
            contacts:Array,
            deviceId : String
        },
        mounted(){
            this.getGithubReadme()
        },
        methods : {
            sendFeedback(){
                if(this.sendFeedbackStatus === 2)return;
                if(!this.feedbackMessage)return document.getElementById('feedbackInput').focus();

                this.sendFeedbackStatus = 1;
                const db = getDatabase();
                set(ref(db, `feedbacks/${this.deviceId}/${Date.now()}`), this.feedbackMessage)
                .then(() => {
                    this.feedbackMessage = "";
                    this.sendFeedbackStatus = 3;
                }).catch((error) => {
                    this.sendFeedbackStatus = 0;
                    console.error(error);
                });

            },
            getGithubReadme(){
                const readmeUrl = "https://raw.githubusercontent.com/PaulSong213/PaulSong213/main/README.md";
                axios.get(readmeUrl)
                .then( (response) => {
                    this.readmeText = response.data;
                })
                .catch( (error) => {
                    console.log(error);
                })
            }
        }
    };
</script>
<style scoped>
    h1,h2,h3,h3,h5,h6,p,ion-icon{
        color: #ffffff;
    }
    ion-icon{
        pointer-events: none;
    }
    .hero-image{
       animation-name: changeColor;
       animation-duration: 5000ms;
       animation-iteration-count: infinite;
       animation-timing-function: ease-in-out;
    }
    @keyframes changeColor{
        from {filter: hue-rotate(0deg);}
        to {filter: hue-rotate(360deg);}
    }
</style>

