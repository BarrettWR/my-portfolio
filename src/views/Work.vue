<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
import VueGallery from 'vue-gallery'

let images = ref([
  'https://dummyimage.com/800/ffffff/000000',
  'https://dummyimage.com/1600/ffffff/000000',
  'https://dummyimage.com/1280/000000/ffffff',
  'https://dummyimage.com/400/000000/ffffff',
  'https://dummyimage.com/800/ffffff/000000',
  'https://dummyimage.com/1600/ffffff/000000',
  'https://dummyimage.com/1280/000000/ffffff',
  'https://dummyimage.com/400/000000/ffffff',
  'https://dummyimage.com/800/ffffff/000000',
  'https://dummyimage.com/1600/ffffff/000000',
  'https://dummyimage.com/1280/000000/ffffff',
  'https://dummyimage.com/400/000000/ffffff',
  'https://dummyimage.com/800/ffffff/000000',
  'https://dummyimage.com/1600/ffffff/000000',
  'https://dummyimage.com/1280/000000/ffffff',
])

let index = ref(null)

</script>

<template>
    <div class="flex flex-col max-w-[77%]"> 
        <Topbar>
            <template #title>Work</template>
        </Topbar>
        <div class="max-w-[100%] h-[80svh] overflow-y-scroll p-20">
            <div class="flex flex-wrap max-w-[100%]">
                <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '200px' }"
                ></div>
            </div>
        </div>
    </div>

</template>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 10px;
  }
</style>