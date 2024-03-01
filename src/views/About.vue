<script setup>
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
</script>

<template>
    <div class="flex flex-col max-w-[77%]">
        <Topbar>
            <template #title>About</template>
        </Topbar>
    
        <div class="flex flex-col p-[100px] pt-[70px] max-w-[100%] h-[80svh] text-2xl gap-5 overflow-y-auto">
            <h1 class="text-4xl">Hello! 👋</h1>
            <p> <span class="fancytext font-bold">I'm Barrett Reinhard, a graphic and web designer.</span> I have a Bachelor's of Science in Communication Design (it's like graphic design, but with a greater focus on technology) and 
                a minor in Computer Science. I have also completed The Odin Project, an online, open-source course on web development. 
            </p>
            <p>
                In my work experience as a graphic designer I created branding, social media posts, and physical marketing materials using
                Adobe Photoshop, Illustrator, and Indesign.
            </p>
            <p>
                I have also used many different web design related technologies, including (but not limited to):
                <ul class="flex flex-col list-disc pl-10 p-5 bg-white bg-opacity-10 rounded-md gap-1">
                    <li>HTML, CSS, & Javascript</li>
                    <li>TailwindCSS</li>
                    <li>React & Vue</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>Wordpress, Wix, and Webflow</li>
                    <li>The Adobe Suite</li>
                </ul>
            </p>
            <p>
                To see my work, please click <router-link to="/work" class="font-bold text-blue-400">here</router-link> or on the the link in the sidebar.
            </p>

            <p>
                This website was created using HTML, CSS, JS, Vue, and TailwindCSS.
            </p>
        </div>
    </div>
 

</template>

<style>

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
        animation: move-bg 6s linear infinite reverse;
    }
    @keyframes move-bg {
        to {
            background-position: var(--bg-size) 0;
        }
    }
}

</style>