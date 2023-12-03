<template>
    <div class="item" v-for="item, index in usersStore.users">
        {{ item.firstName }}
    </div>
</template>

<script setup>
import { useUsers } from "../store/users";
let usersStore = useUsers();
usersStore.getUsers();
console.log(usersStore);
</script>

<style lang="scss">

</style>