<template>
    <div>
        <div class="users-container">
            <UserCard class="user-card"  v-for="user in allUsers" :user="user" :key="user._id">user</UserCard>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserCard from './UserCard';
export default {
    name: "UserList",
    components: {
        UserCard
    },
    methods: {
        ...mapActions(['fetchUsers'])
    },
    created() {
        this.fetchUsers();
    },
    computed: mapGetters(["allUsers"])
}
</script>

<style scoped>
.users-container {
    column-count: 3;
}
.user-card {
    padding: 5px;
    max-width: 100%;
}
</style>