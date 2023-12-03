<template>
    <Transition name="upcomingItem">
    <div class="upcoming__item" v-if="slideView == index">
        <img v-lazy="imgUrlFull + movie.backdrop_path" alt="" class="upcoming__bg">
        <div class="upcoming__content" @mousedown="$emit('pauseSlide')" @mouseup="$emit('clearPause')">
            <h2 class="upcoming__title">{{ movie.title }}</h2>
            <p class="upcoming__desc text-limit">{{ movie.overview }}</p>
            <BtnMore/>
        </div>
        <div class="upcoming__next" @click="$emit('nextSlide')">
            <img v-lazy="imgUrl + next.backdrop_path" alt="" class="upcoming__next-bg">
            <div class="upcoming__next-content">
                <p class="upcoming__next-name">Следующий</p>
                <h3 class="upcoming__next-title">{{ next.title }}</h3>
                <div class="upcoming__next-line"></div>
            </div>
        </div>
    </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['movie', 'index', 'slideView', 'next'])
import { imgUrl, imgUrlFull } from "../../static";
// const props = defineProps({
//     movie: {
//         type: Object,
//         default: null
//     },
//     index: Number
// })
</script>

<style lang="scss">
.upcomingItem-enter-active,
.upcomingItem-leave-active {
  transition: 0.5s linear;
}

.upcomingItem-enter-from {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
}
.upcomingItem-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.upcomingItem-leave-from {
    opacity: 1;
    transform: translateX(0);
}
.upcomingItem-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

</style>