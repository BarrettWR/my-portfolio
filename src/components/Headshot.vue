<script setup>


</script>

<template>
    <span id="blur">
        <div id="blob"></div>
    </span>
    <router-link to="/" class="">
      <div class="w-[230px] h-[230px] rounded-[100%] aspect-square overflow-hidden relative container cursor-pointer select-none">
          <img class="select-none aspect-square object-cover scale-[75%] top-[42px] left-[2px] z-10 absolute transition-all pop" src="../assets/me_sticker.png" alt="">
          <img class="select-none w-[230px] h-[230px] aspect-square object-cover scale-[170%] absolute transition-all hover:brightness-95" src="../assets/me.jpg" alt="">
      </div>
    </router-link>
</template>


<style>

#blob {
    z-index: 0;
    background-color: white;
    height: 16vmax;
    min-height: 220px;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 0px;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, aquamarine, rgb(108, 57, 212));
    animation: rotate 6s infinite;
    opacity: 1;
}

#blur {
    z-index: 0;
    position: absolute;
    top: 18%;
    filter:blur(60px)
}

@keyframes rotate {
  0% {
    rotate: 0deg;
  }
  
  50% {
    rotate: 180deg;
    scale: 1.2 1.2;
  }
  
  100% {
    rotate: 360deg;
  }
}


.container:hover .pop {
    transition: all;
    top: 35px;
    transform: scale(0.85);
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);

}

.container:hover img:nth-child(2) {
    transition-duration: 250ms;
    filter: brightness(95%) blur(1px);
}

</style>