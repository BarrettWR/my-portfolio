<script setup>
import { RouterLink } from 'vue-router';
import Headshot from './Headshot.vue';
</script>

<template>
    <div class="flex flex-col items-center gap-3 p-10 w-[23svw] min-w-[280px] min-h-[650px] h-screen border-r-2 border-gray-700 bg-slate-900 ">
        <span id="blur">
            <div id="blob"></div>
        </span>
        <Headshot/>
        <h1 class="text-3xl font-bold text-nowrap">Barrett Reinhard</h1>

        <div class="flex flex-col items-center gap-5 mt-[20%] text-2xl">
            <router-link to="/" class="spin ">About</router-link>
            <router-link to="/work" class="spin ">Work</router-link>
            <router-link to="/contact" class="spin ">Contact</router-link>
        </div>

        <div class="flex gap-7 mt-auto">
            <a class="" href="https://github.com/BarrettWR"><img class="icon spin " src="../assets/github.png" alt=""></a>
            <a class="" href="https://www.instagram.com/reinhardbarrett/"><img class="icon spin  invert" src="../assets/insta.png" alt=""></a>
            <a class="" href="https://www.linkedin.com/in/barrett-reinhard-24a86314a/"><img class="icon spin" src="../assets/linkedin.png" alt=""></a>
        </div>

        

    </div>

</template>

<style>


.spin:hover {
    cursor: pointer;
    animation: spin-bounce 0.35s ease-in-out;
}

@keyframes spin-bounce {
    0% {
        transform: rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1);
    }
    33% {
        transform: rotate3d(0, 0, 1, 5deg) scale3d(1.1, 1.1, 1.1);
    }
    66% {
        transform: rotate3d(0, 0, 1, -5deg) scale3d(1.1, 1.1, 1.1);
    }
    100% {
        transform: rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1);
    }
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

#blob {
    z-index: 0;
    background-color: white;
    height: 16vmax;
    min-height: 220px;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, aquamarine, rgb(108, 57, 212));
    animation: rotate 10s infinite;
    opacity: 1;
}

#blur {
    z-index: 0;
    position: absolute;
    top: 18%;
    filter:blur(60px)
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.2;
  }
  
  to {
    rotate: 360deg;
  }
}


</style>