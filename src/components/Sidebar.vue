<script setup>
import { RouterLink } from 'vue-router';
import Headshot from './Headshot.vue';

</script>

<template>
    <aside class="flex flex-col items-center gap-3 p-10 w-[23svw] min-w-[280px] min-h-[650px] h-screen border-r-2 border-gray-700 bg-slate-900 z-10">
        <Headshot/>
        
        <h1 class="text-3xl font-bold text-nowrap">Barrett Reinhard</h1>

        <div class="flex flex-col text-sm gap-1 text-slate-300 items-center">
            <p><a href="mailto: BarrettWR@outlook.com" class="text-blue-400 hover:underline" >BarrettWR@outlook.com</a></p>
            <p><a href="tel:+18055514886" class="text-blue-400  hover:underline">+1 (805) 551-4886</a></p>
        </div>

        <div class="flex flex-col items-center gap-5 mt-[20%] text-2xl">
            <router-link to="/about" class="spin focus:font-bold">About</router-link>
            <router-link to="/work" class="spin focus:font-bold">Work</router-link>
            <a href="../../public/resume.pdf" name="Download Resume" class="spin focus:font-bold flex" download="Resume - Barrett Reinhard.pdf">Resume <img class="max-h-8 ml-1 invert" src="../assets/download.png" alt=""></a>
        </div>

  

        <div class="flex gap-7 mt-auto items-baseline">
            <a href="https://github.com/BarrettWR"><img class="icon spin " src="../assets/github.png" alt=""></a>
            <a href="https://www.instagram.com/reinhardbarrett/"><img class="icon spin invert" src="../assets/insta.png" alt=""></a>
            <a href="https://www.linkedin.com/in/barrett-reinhard-24a86314a/"><img class="icon spin" src="../assets/linkedin.png" alt=""></a>
            <a href="https://www.behance.net/barrettreinhard"><img class="h-7 spin invert" src="../assets/behance.png" alt=""></a>
        </div>

        

    </aside>

</template>

<style>

.spin:hover {
    cursor: pointer;
    transition: all;
    transition-duration: 0.2s;
    scale: 1.1;
}

img {
    /* user-drag: none; */
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.icon {
    width: 35px;
    height: auto;
}


</style>