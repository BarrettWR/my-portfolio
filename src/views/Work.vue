<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
import VueGallery from 'vue-gallery'
import Plo from '@/assets/portfolio_images/p-lo.png'
import Nrrg from '@/assets/portfolio_images/nrrg.jpg'
import Pagebreak from '@/assets/portfolio_images/pagebreak.png'
import PPP from '@/assets/portfolio_images/PPP.png'
import AS_work from '@/assets/portfolio_images/As_work.png'
import AS_stickers from '@/assets/portfolio_images/As_stickers.png'



let index = ref(null)

let images = ref([
  {
    title: 'Otterlands Branding and Design',
    description: 'The Otterlands concert is one of the largest events that takes place at CSU: Monterey Bay. I was responsible for creating all of the branding and marketing including social media graphics, print marketing, and day of signage. I used Photoshop to create all of the materials for the event (which came out to over 50 different posters, signs, and social media posts).',
    href: Plo,
  },
  {
    title: 'Pagebreak.design Branding',
    description: 'As a part of my final Capstone project, I created my own personal branding. I chose warm colors, rounded edges, and vector shapes for my brand to convey friendliness, trustworthiness, and happiness. I used this branding to design my first portfolio website, business cards, and more.',
    href: Pagebreak,
  },
  {
    title: 'Corporate Branding: Nevada Red Rock Group',
    description: 'As a part of my design coursework, I had the Nevada Red Rock Group company as a client. They wanted completely new and unique branding as well as a logo. I conducted several rounds of iteration and refinement to create a logo that represented what the client wanted. The hands in the final logo represent that they are a holding company, and the colors reflect their name and values.',
    href: Nrrg,
  },
  {
    title: 'Website & Brochure Design: Peninsula Pilates Project',
    description: 'For this project, I was a volunteer for a local nonprofit - the Peninsula Pilates Project. Over the course of about 20 hours, I took photos, updated their website using Wix, and created a new brochure for them.',
    href: PPP,
  },
  {
    title: 'Instagram Posts for Associated Students Events',
    description: 'Over the course of my 1.5 years at Associated Students on campus, I created many different social media posts promoting on campus events. I primarily used Photoshop and Illustrator.',
    href: AS_work,
  },
  {
    title: 'Stickers for Associated Students',
    description: 'For larger events, I would be tasked with creating stickers to use as giveaway/promotional items. These are some of the stickers I made using Illustrator. I am especially proud of the ones depicting the school mascot, Monte.',
    href: AS_stickers,
  },
])



</script>

<template>
    <div class="flex flex-col max-w-[77%]"> 
        <Topbar>
            <template #title>Work</template>
        </Topbar>
        <div class="max-w-[100%] h-[80svh] p-[100px] overflow-y-auto">
            <div class="flex flex-wrap place-content-center max-w-[100%] ">
                <VueGallery class="" description="hello" :images="images" :index="index" :options="options" @close="index = null"></VueGallery>
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
            <h1 class="text-center text-3xl m-10">Want more in-depth info? Check out my <a href="https://www.behance.net/" class="text-blue-400 hover:underline">Behance.</a></h1>

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

  .blueimp-gallery > .slides > .slide {
    height: 70svh;
    margin-top: 25svh;
  }

  .blueimp-gallery > .slides > .slide > .slide-content{
    border-radius: 5px;
  }

  .sizing > :nth-child(n){
    width: 48%;
    height: 350px;
  }

/* 
  .sizing > :nth-child(-n+4) {
    width: 80%;
    height: 500px;
  }

  .sizing > :nth-child(n+4) {
    width: 39%;
    height: 250px;
  } */


</style>