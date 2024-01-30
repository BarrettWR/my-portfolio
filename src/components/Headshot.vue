<script setup>


</script>

<template>
    <div class="w-[200px] rounded-[100%] aspect-square overflow-hidden relative container cursor-pointer">
        <img class="aspect-square object-cover scale-[75%] top-[35px] left-[1px] z-10 absolute pop" src="../assets/me_sticker.png" alt="">
        <img class="aspect-square object-cover scale-[170%] absolute hover:brightness-95" src="../assets/me.jpg" alt="">
    </div>
</template>


<style>
.container:hover .pop {
    top: 30px;
    transform: scale(0.85);
    transition: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.container:hover img:nth-child(2) {
    transition: all;
    transition-duration: 250ms;
    filter: brightness(95%) blur(1px);
}

</style>