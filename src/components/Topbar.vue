<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

const rockets = Array.from({ length: 70 }, (_, id) => ({
    id,
    strength: Math.random() * 10 + 8, // Random strength between 10 and 30
    size: Math.floor(Math.random() * 15 + 2) + 'px',
    rotation: Math.floor(Math.random() * 360) + 'deg',
    topOffset: Math.floor(Math.random() * 86) + "%", // Random position (0 to 99%)
    leftOffset: Math.floor(Math.random() * 100) + "%", // Random position (0 to 99%)
}))


</script>

<template>
        <KinesisContainer class="flex flex-row"> 
            <div class="flex grow p-[80px] pb-5 w-[100%] border-b-2 border-gray-700">
                <kinesis-element
                v-for="rocket in rockets"
                :key="rocket.id"
                :strength="rocket.strength"
                class="rocket"
                :style="{'top': rocket.topOffset, 'left': rocket.leftOffset, 'fontSize': rocket.size, 'rotate': rocket.rotation}"
                :cycle="-1"
                type="depth"
                :maxY="100"
            >⭐</kinesis-element>
                <h1 class="text-5xl p-1">
                    <slot name="title"></slot>
                </h1>
            </div>
        </KinesisContainer>
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


</style>