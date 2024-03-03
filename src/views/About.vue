<script setup>
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
</script>

<template>
    <div class="flex flex-col max-w-[77%]">
        <Topbar>
            <template #title>About</template>
        </Topbar>
    
        <div class="flex flex-col p-[100px] pt-[70px] max-w-[100%] h-[82svh] text-2xl gap-5 overflow-y-auto">
            <p>I'm a recent college grad, looking to land a job in web design. My favorite thing in the world is the point where <span class="text-[aquamarine]">design</span> meets <span class="text-purple-400">technology.</span> Ever since my first web design class in high school, I've known what I wanted to do.</p>
            <p> I have a Bachelor's of Science in <span class="text-[aquamarine]">Communication Design</span> (it's like graphic design, but with a greater focus on tech) and 
                a minor in Computer Science. I have also completed <span class="text-purple-400">The Odin Project,</span> an online, open-source course on web development. 
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