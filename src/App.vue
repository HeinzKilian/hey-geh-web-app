<template lang="pug">
.app.d-flex
    NavBar
    router-view.flex-grow-1
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    components: { NavBar },
}
</script>

<style scoped lang="scss">
</style>
