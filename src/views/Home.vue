<script setup>
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

const rockets = Array.from({ length: 150 }, (_, id) => ({
    id,
    strength: Math.random() * 15 + 8, // Random strength between 10 and 30
    size: Math.floor(Math.random() * 15 + 2) + 'px',
    rotation: Math.floor(Math.random() * 360) + 'deg',
    topOffset: Math.floor(Math.random() * 100) + "%", // Random position (0 to 99%)
    leftOffset: Math.floor(Math.random() * 100) + "%", // Random position (0 to 99%)
}))


</script>

<template>

    <div class=" flex grow  max-w-[100%]"> 
        <kinesis-container class="w-[100%] h-[100%] p-[100px]">
            <span class="flex flex-row items-center text-[200px]"><h1 class="fancytext">Hello!</h1><span class="text-[150px] hand">👋</span></span>
            <div class="text-3xl ml-[14px] mt-[-30px]">I'm Barrett Reinhard, a web and graphic designer.</div>
            <kinesis-element
                v-for="rocket in rockets"
                :key="rocket.id"
                :strength="rocket.strength"
                class="rocket"
                :style="{'top': rocket.topOffset, 'left': rocket.leftOffset, 'fontSize': rocket.size, 'rotate': rocket.rotation}"
                :cycle="-1"
                type="depth"
    
            >⭐</kinesis-element>

            <div class="flex gap-10 mt-[50px] ml-[14px] text-2xl">
                <router-link to="/work" class="text-[aquamarine] hover:translate-x-2 transition-all duration-200" >See my work -></router-link>
                <router-link to="/about" class="text-purple-400 hover:translate-x-2 transition-all duration-200" >About Me -></router-link>
            </div>
        </kinesis-container>
    </div>

</template>

<style>

.rocket {
    z-index: -100;
    /* font-size: 10px; */
    position: absolute;
    opacity: 20%;
    color: transparent;
    background-color: white;
    background-clip: text;
    text-shadow: 0 0 20px white;
}

.rocket:nth-child(3n) {
    filter: blur(1px);
}

.hand {
    animation: wave 4s ease-in-out infinite;
    transform-origin: 100%;
}

@keyframes wave {
    0% {
        rotate: 0;
    }
    25% {
        rotate: 7deg;
    }
    50% {
        rotate: 0deg;
    }
    75% {
        rotate: 7deg;
    }
    100% {
        rotate: 0deg;
    }
}

.bigtext {
    font-size: 150px;
}

.fancytext {
    --bg-size: 300%;
    --color-one: aquamarine;
    --color-two: rgb(136, 85, 239);
    font-family: sans-serif;
    background: linear-gradient(
        90deg,
        var(--color-one),
        var(--color-two),
        var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
    color: transparent;
    background-clip: text;
}


@media (prefers-reduced-motion: no-preference) {
    .fancytext {
        animation: move-bg 4.5s linear infinite reverse;
    }
    @keyframes move-bg {
        to {
            background-position: var(--bg-size) 0;
        }
    }
}


</style>