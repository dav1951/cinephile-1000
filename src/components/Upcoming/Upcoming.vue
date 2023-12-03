<template>
    <Transition name="upcoming">
    <div class="upcoming" v-if="getUpcomingArray.length">
        <UpcomingItem v-for="item, index in getUpcomingArray" :key="item.id"
        :movie="item" 
        :index="index" 
        :slideView="slideView"
        :next="getUpcomingArray[ getUpcomingArray.length > index + 1 ? index+1 : 0 ]"
        @nextSlide="nextSlide"
        @pauseSlide="pauseSlide"
        @clearPause="clearPause"
        />
    </div>
    <div class="loading" v-else>
        <div class="loading__spiner"></div>
    </div>
    </Transition>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from "../../store/upcoming.js";
import { computed, ref } from "vue";
let upcomingStore = useUpcoming();
setTimeout(() => {
    upcomingStore.getUpcoming()    
}, 1000);
const getUpcomingArray = computed(()=>upcomingStore.list)
const slideView = ref(0);
let timeout = null;

function nextSlide() {
    clearTimeout(timeout);
    autoplay();
}

function autoplay() {
    if (getUpcomingArray.value.length - 1 > slideView.value) {
         slideView.value++
    } else {
        slideView.value = 0;
    }
    timeout = setTimeout(() => {
        autoplay()
    }, 5000);
}

autoplay()

function pauseSlide() {
    clearTimeout(timeout)
    console.log('mouseDown');
}

function clearPause() {
    console.log('mouseUp');
    timeout = setTimeout(() => {
        autoplay()
    }, 5000);
}

</script>

<style lang="scss">
.upcoming-enter-active,
.upcoming-leave-active {
  transition: 0.5s linear;
}

.upcoming-enter-from {
    opacity: 0;
    transform: scale(0);
    position: absolute;
}
.upcoming-enter-to {
    opacity: 1;
    transform: scale(1);
}
.upcoming-leave-from {
    opacity: 1;
    transform: scale(1);
}
.upcoming-leave-to {
    opacity: 0;
    transform: scale(0);
    position: absolute;
}
</style>