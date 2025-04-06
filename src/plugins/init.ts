import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'
import { isClient } from "@vueuse/shared";

export default defineNuxtPlugin((nuxtApp) => {
    // if (isClient) {
    //     gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)
    // }

    // return {
    //     provide: {
    //         gsap,
    //         Draggable,
    //         ScrollTrigger,
    //     },
    // }
})