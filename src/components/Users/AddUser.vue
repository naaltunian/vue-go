<template>
    <form @submit="addUser" class="ui form">
        <div class="field">
            <label>First Name</label>
            <input v-model="userData.user.name" type="text" name="name" placeholder="Name">
        </div>
        <div class="field">
            <label>Email</label>
            <input v-model="userData.user.email" type="text" name="email" placeholder="Email">
        </div>
        <div class="field">
            <label>LinkedIn</label>
            <input v-model="userData.user.linkedIn" type="text" name="linkedIn" placeholder="LinkedIn username">
        </div>
        <div class="field">
            <label>Github Username</label>
            <input v-model="userData.user.githubUsername" type="text" name="githubuserName" placeholder="Github Username">
        </div>
        <button class="ui button" type="submit">Submit</button>
    </form>
</template>

<script>
// import { mapActions } from 'vuex';
import api from '../../api/api';
export default {
    name: "AddUser",
    data() {
        return {
            userData: {user: {}}
        }
    },
    methods: {
        addUser(e) {
            e.preventDefault();
            api.createUser(this.userData.user);
            this.userData = {user: {}};
        }
    }
}
</script>

<style scoped>

</style>