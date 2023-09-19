<template>
    <div @click="sendId" class="users">
        <div class="users__item" v-for="user in userss" :key="user.id" @click="this.userID = user.id">
            <div  class="users__img"><img :src="user.img" alt="user" class="user-img"></div>
            <div class="users__info">
                <div class="users__head">
                    <h4 class="users__name">{{ user.name }}</h4> 
                    <p class="users__time">23:35</p>
                </div>
                <div class="users__message">
                    <p class="chat-message">How to make Whatsapp clone using Vue!</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'users-list',
    props: {
        userss: {
            type: Array,
            required: true,
        }
        
    },
    
    data() {
        return {
            userID: 0,
        }
    },
    methods: {
        sendId() {
            this.$emit('sendId', this.userID)
        }
    },
    
}
</script>

<style scoped>

.users__item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    cursor: pointer;
}

.users__item:hover {
    background: #f5f5f5;
}

.users__img {
    position: relative;
    min-width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
}

.users__img .user-img {
    position: absolute;
    width: 45px;
    height: 45px;
}

.chat-message {
    position: relative;
}

.users__info {
    position: relative;
    width: 100%;
}

.users__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 11px;
}

.users__name {
    font-size: 17px;
    font-weight: 600;
    color: #111;
}

.users__time {
    font-size: 12px;
    color: #aaa;
}

.users__message {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-message {
    color: #aaa;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    font-size: 14px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 19px;
    text-overflow: ellipsis;
}

.users__item_active {
    background-color: #ebebeb;
}
</style>
