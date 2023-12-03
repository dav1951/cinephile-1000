<template>
    <main class="main">
        <Upcoming/>
        <Content type="movie" />
        <Content type="tv" />
        <Top/>
    </main>
</template>

<script setup>
import Upcoming from '../components/Upcoming/Upcoming.vue';
import Content from '../components/Content/Content.vue';
import Top from "../components/Top/Top.vue";
</script>

<style lang="scss">

</style>