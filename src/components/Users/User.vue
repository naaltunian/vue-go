<template>
    <div>
        {{$route.params.id}}
        {{ user }}
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            user: {}
        }
    },
    methods: {
        getUser() {
            this.user = this.$store.getters['getUser'](this.$route.params.id)
        }
    },
    created() {
        this.getUser()
    }
}
</script>

<style scoped>

</style>