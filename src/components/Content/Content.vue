<template>
    <Transition name="upcoming">
    <section class="content" v-if="content.length">
        <a href=""></a>
        <router-link :to="`/${type}`" class="content__title">
            {{ type == "movie" ? 'Фильмы' : "Сереалы"}}
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </router-link>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="24"
            navigation
            :breakpoints="breakpoints"
        >
            <swiper-slide @click="getInfo(item)" class="content__item" v-for="item, index in content">
                <img v-lazy="imgUrl + item.poster_path" alt="" class="content__img">
            </swiper-slide>
            <swiper-slide class="content__item">
                <router-link :to="`/${type}`" class="content__link">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="content__icon" />
                    <span>{{ type == "movie" ? "Все фильмы" : "Все сериалы"}}</span>
                </router-link>
            </swiper-slide>
        </swiper>
        <div ref="inf">
          <InfoBlock :current="current" :open="open" @close="closeInfo"/>
        </div>
        
    </section>
    <div class="loading" v-else>
        <div class="loading__spiner"></div>
    </div>
    </Transition>
</template>

<script setup>
const props = defineProps(['type'])
import { usePopular } from "../../store/popular";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { imgUrl } from "../../static";
import InfoBlock from "../InfoBlock/InfoBlock.vue";
import { useDetails } from "../../store/details";
const detailsStore = useDetails();
const popularStore = usePopular();
popularStore.getPopular(props.type);
const content = computed(()=>props.type == 'movie' ? popularStore.movieslist : popularStore.tvslist)
const modules = ref([Navigation]);
const breakpoints = ref({
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1.2,
    },
    500: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 1.8,
    },
    650: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
})
const inf = ref();
const open = ref(false);

let current = ref(null);
async function getInfo(item) {
  current.value = null;
    await detailsStore.getDetails(item.id, props.type )
    current.value = props.type == 'movie' ? detailsStore.movieInfo : detailsStore.tvInfo;
    open.value = true;
    
    window.scroll({
      top: inf.value.offsetTop - headerId.offsetHeight,
      behavior: 'smooth'
    })
}

function closeInfo() {
  open.value = false;
  current.value = null;
}


</script>

<style lang="scss">

</style>