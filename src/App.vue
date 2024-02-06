<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';


</script>

<template>
    <div class="flex flex-row w-[100svw]">
        <Sidebar/>
        <router-view class="flex grow" v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    position: relative;
    translate: 0px 30px;
    opacity: 0;
}
</style>
