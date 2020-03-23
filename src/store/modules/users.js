import axios from 'axios';

const state = {
    users: []
}

const getters = {
    allUsers: state => state.users
}

const actions = {
    fetchUsers: async ({ commit }) => {
        const { data } = await axios.get('http://localhost:5000/get_users');
        console.log("data", data);
        commit("setUsers", data);
    }
}

const mutations = {
    setUsers: (state, users) => {
        state.users = users;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}