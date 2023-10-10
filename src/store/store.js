import { createStore } from 'vuex';

const state = {
    users: [],
};

const mutations = {
    addUser(state, user) {
        state.users.push(user);
    },
    addChild(state, childData) {
        if (state.users.length > 0) {
            const currentUser = state.users[state.users.length - 1];
            if (currentUser.children.length < 5) {
                currentUser.children.push(childData);
            }
        }
    },
    removeChild(state, { userId, index }) {
        const user = state.users.find(user => user.id === userId);
        if (user) {
            user.children.splice(index, 1);
        }
    },
};

export default createStore({
    state,
    mutations,
});
