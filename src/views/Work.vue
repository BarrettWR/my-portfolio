<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
import VueGallery from 'vue-gallery'

let images = ref([
  {
    title: '400x400',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus reprehenderit eveniet fuga, eligendi atque error dicta iusto hic modi, molestias rem sint consequuntur soluta autem, itaque fugit maiores vel.',
    href: 'https://dummyimage.com/400/ffffff/000000',
  },
  {
    title: '400x400',
    description: '400 x 400 Black',
    href: 'https://dummyimage.com/400/000000/ffffff',
  },
  {
    title: '400x400',
    description: '400 x 400 White',
    href: 'https://dummyimage.com/400/ffffff/000000',
  },
  {
    title: '400x400',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus reprehenderit eveniet fuga, eligendi atque error dicta iusto hic modi, molestias rem sint consequuntur soluta autem, itaque fugit maiores vel.',
    href: 'https://dummyimage.com/400/ffffff/000000',
  },
  {
    title: '400x400',
    description: '400 x 400 Black',
    href: 'https://dummyimage.com/400/000000/ffffff',
  },
  {
    title: '400x400',
    description: '400 x 400 White',
    href: 'https://dummyimage.com/400/ffffff/000000',
  },
])

let index = ref(null)

function linkFunction() {
  window.location.href = "https://www.example.com";
}

</script>

<template>
    <div class="flex flex-col max-w-[77%]"> 
        <Topbar>
            <template #title>Work</template>
        </Topbar>
        <div class="max-w-[100%] h-[80svh] overflow-y-auto p-20">
            <div class="flex flex-wrap place-content-center max-w-[100%] ">
                <VueGallery class="" description="hello" :images="images" :index="index" @close="index = null"></VueGallery>
                <div class="sizing flex grow flex-wrap place-content-center">
                    <div
                      class="image"
                      v-for="(image, imageIndex) in images"
                      :key="imageIndex"
                      @click="index = imageIndex"
                      :style="{ backgroundImage: 'url(' + image.href + ')', }"
                  ></div>
                </div>
                
                
            </div>
        </div>
    </div>

</template>

<style>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 5px;
  }

  .image:hover {
    scale: 1.05;
  }

  .blueimp-gallery > .title {
    margin: 50px;
  }

  .blueimp-gallery-controls > .description {
    margin: 50px;
    margin-top: 70px;
  }


  .sizing > :nth-child(-n+4) {
    width: 80%;
    height: 500px;
  }

  .sizing > :nth-child(n+4) {
    width: 39%;
    height: 250px;
  }


</style>