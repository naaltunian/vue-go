<template>
    <div>
        userlist
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "UserList",
    methods: {
        ...mapActions(['fetchUsers'])
    },
    created() {
        this.fetchUsers();
    }
}
</script>

<style scoped>

</style>