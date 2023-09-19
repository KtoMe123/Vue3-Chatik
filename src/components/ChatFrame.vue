<template>

    <div class="chat-default" v-if="usersID === 'def'">Welcome</div>
    <div v-else class="chat-frame">
        <div  class="chat-frame__main">
            <div class="chat-frame__wrapper">
                <main-header>
                        <template #Content>
                            <div class="chat-info">
                                <img @click="Check" :src="UsersInfo[usersID].img" alt="img" class="header__img">
                                <div class="chat-info__name">{{UsersInfo[usersID].name}}</div>
                            </div>
                            
                        </template>
                        <template #Nav>
                            <ul class="nav-icons">
                                <li class="nav-icon" v-for="icon in HeadIcons" :key="icon"><ion-icon :name="icon.name"></ion-icon></li>
                            </ul>
                        </template>
                    </main-header>
                <div class="chat">
                    <div style="" class="chat__content">
                        <div class="chat__message chat__message_my">
                            <p class="chat__text">Hi<br><span class="chat__time">12:32</span></p>
                        </div>
                        <div class="chat__message chat__message_frend">
                            <p class="chat__text">Hi<br><span class="chat__time">12:32</span></p>
                        </div>
                    </div>

                    <my-input></my-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chat-frame',
    props: {
        usersID: {
            type: Number
        },
        UsersInfo: {
            type: Array
        }
    },
    methods: {
        Check() {
            console.log(infoId[0])
        }
    },

    
}
</script>

<style scoped>
.chat-default {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    width: 100%;
}
.chat__content {
    padding: 50px;
    overflow-y: auto;
    flex: 1 1 auto;
    background: url('src/assets/pattern2.png');
}
.chat {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto;

}

.chat-info {
    display: flex;
    align-items: center;
}
.chat-info__name {
    margin-left: 10px;
}
.chat-frame {
    height: 100%;
    width: 100%;
}

.chat-frame__main { 
    height: 100%;
}

.chat-frame__wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.header__img {
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;

}

.nav-icons {
    display: flex;
}

.nav-icon {
    display: flex;
    list-style: none;
    cursor: pointer;
    color: #51585c;
    font-size: 24px;
    margin-right: 22px;
}

.nav-icon:last-child {
    margin: 0;
}

.chat__message {
    position: relative;
    display: flex;
    margin: 5px 0;
    
}

.chat__message_my {
    justify-content: flex-end;
}

.chat__message_my .chat__text {
    background-color: #dcf8c6;
    text-align: right;
}

.chat__text {
    text-align: left;
    padding: 12px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 14px;
}

.chat__message_frend .chat__text::before {
    content: '';
    position: absolute;
    top: 0;
    left: -12px;
    width: 20px;
    height: 20px;
    background: linear-gradient( -135deg,#fff 0%, #fff 50%, transparent 50%, transparent);
}

.chat__message_my .chat__text::before {
    content: '';
    position: absolute;
    top: 0;
    right: -12px;
    width: 20px;
    height: 20px;
    background: linear-gradient( 135deg,#dcf8c6 0%, #dcf8c6 50%, transparent 50%, transparent);

}

.chat__time {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    opacity: 0.5;
}
</style>