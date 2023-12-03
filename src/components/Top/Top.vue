<template>
  <Transition name="upcoming">
    <section class="rate" v-if="content.length">
        <h2 class="rate__title">
            ТОП
            <span class="rate__subtitle"> 10 </span>
        </h2>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="24"
            navigation
            :breakpoints="breakpoints"
        >
            <swiper-slide  class="rate__item" v-for="item, index in content">
                <router-link :to="`/movie/${item.id}`" >
                <img v-lazy="imgUrl + item.poster_path" alt="" class="rate__img">
                <div class="rate__content">
                    <p>{{ index + 1 }}</p>
                </div>
            </router-link>
            </swiper-slide>
            
        </swiper>

    </section>
    <div class="loading" v-else>
        <div class="loading__spiner"></div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from "../../static";
import { useTop } from "../../store/topRase.js";

const topStore = useTop();
topStore.getTop();
const content = computed(()=> topStore.movieslist)
const modules = ref([Navigation]);
const breakpoints = ref({
    // when window width is >= 320px
    280: {
      slidesPerView: 1,   
    },
    400: {
      slidesPerView: 1.2,   
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.5,
    },
    1600: {
      slidesPerView: 3.2,
    },
})

</script>

<style lang="scss" >

</style>