import axios from 'axios';

export default {
    async createUser(userData) {
        const user = JSON.stringify({
            name: userData.name,
            email: userData.email,
            linkedIn: userData.linkedIn,
            githubUsername: userData.githubUsername
        });
        await axios.post("http://localhost:5000/create_user", user, {
            headers: {
                'Content-Type': "application/json"
            }
        });
    }
}