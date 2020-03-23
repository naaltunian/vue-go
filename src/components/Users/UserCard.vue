<template>
    <div class="ui card">
        <div class="content">
            <router-link :to="`/user/${user._id}`" class="header">{{ user.name }}</router-link>
            <div class="meta">
                <span class="date">{{ `${dateCreated.getMonth()}-${dateCreated.getDay()}-${dateCreated.getFullYear()}` }}</span>
            </div>
            <div class="description">
                <p>{{ user.email }}</p>
                <p>{{ user.linkedIn }}</p>
                <p>{{ user.personalSite }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: ["user"],
    computed: {
        dateCreated: function() {
            return new Date(this.user.dateCreated);
        }
    }
}
</script>

<style scoped>

</style>