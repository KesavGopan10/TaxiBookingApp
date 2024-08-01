<script setup>
import Content from './Content.vue';
</script>

<template>
    <header class="header">
        <Content />
    </header>
</template>

<style scoped>
.header {
    max-width: 100%;
    height: fit-content;
    background-color: rgb(27, 31, 113);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}



</style>

