<template lang="pug">
.nav-bar.px-2.py-8
    .nav-bar-home.link.my-6(@click="$router.push('/')") Home
    .nav-bar-entry.link.my-2(v-for="link in links", @click="$router.push(link.route)") {{ link.name }}
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'Statistics',
                    route: '/statistics',
                },
                {
                    name: 'Settings',
                    route: '/settings',
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
    background-color: $color-bg-secondary;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
        width: 200px;
        z-index: 1;
        overflow: hidden;
        font-size: 22px;
        font-weight: bold;
    }
}
</style>