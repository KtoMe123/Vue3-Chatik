<template>
    <div class="container">
        <div class="main">
            <div class="main__user-frame">
                <user-frame :HeadIcons="HeadIcons"/>
                <search  v-on="this.Users = UsersInfo" v-focus placeholder="Search or start new chat" v-model="this.SearchUser">
                    <ion-icon class="search-icon" name="search-outline"></ion-icon>
                </search>
                <users-list :usersSort="SortedUsers" @sendId="IDget"></users-list>
            </div>
            <div class="main__chat-frame">
                <chat-frame :usersID="usersID" :UsersInfo="UsersInfo" :HeadIcons="HeadIcons"/>
            </div>
        </div>
    </div>
</template>



<script>
import UsersList from "../components/UsersList.vue";
import UserFrame from '../components/UserFrame.vue'
import ChatFrame from '../components/ChatFrame.vue'
export default {
    props: {
        UsersInfo: {
            type: Array
        },
        HeadIcons: {
            type: Array
        }
    },
    data() {
        return {
            usersID: 'def',
            SearchUser: '',
        }
    },    
    components: {
        UserFrame,
        ChatFrame,
        UsersList
    },
    methods: {
        IDget(userID) {
            this.usersID = userID
        },
    },
    computed: {
        SortedUsers() {
            if (this.SearchUser) {
                return this.Users.filter(item => {
            return item.name.toLowerCase().includes(this.SearchUser.toLowerCase());
        });
        }
        return this.Users
        },

        }    
    
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 1396px;
    height: 885px;
    min-width: 100%;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), 0 2px 5px 0 rgba(0,0,0,0.06)0;
    display: flex;
}

.main {
    display: flex;
    width: 100%;
    &__user-frame {
        width: 100%;
        position: relative;
        flex: 30%;
        height: 100%;
        background: #fff;
    }
    &__chat-frame {
        width: 100%;
        right: 0;
        display: flex;
        position: relative;
        flex: 70%;
        height: 100%;
        background: #e5ddd5;
        border-left: 1px solid rgba(0,0,0,0.2);
    }
}

.search-icon {
    position: absolute;
    left: 30px;
    top: 14px;
    font-size: 19px;
}
</style>