<template lang="pug">
.nav-bar
    .nav-bar-entry(v-for="link in links", @click="$router.push(link.route)")
        .entry-name {{ link.name }}
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Home',
                    route: '/',
                },
                {
                    name: 'About',
                    route: '/about',
                },
            ],
        }
    },
}
</script>

<style scoped lang="scss">
.nav-bar {
    background-color: #293133;
}
</style>