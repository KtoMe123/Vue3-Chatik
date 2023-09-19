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
                            <p class="chat__text">{{UsersInfo[usersID].message_1}}<br><span class="chat__time">12:32</span></p>
                        </div>
                    </div>

                    <div class="input-form">
                        <ion-icon class="input__icon" name="happy-outline"></ion-icon>
                        <ion-icon class="input__icon" name="attach-outline"></ion-icon>
                        <my-input placeholder="Type a message"></my-input>
                        <ion-icon class="input__icon" name="mic"></ion-icon>
                    </div>
                    
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
        },
        HeadIcons: {
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

<style lang="scss" scoped>

.chat {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto;
    &-default {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        width: 100%;
    }
    &__content {
        padding: 50px;
        overflow-y: auto;
        flex: 1 1 auto;
        background: url('src/assets/pattern2.png');
    }
    &-info {
        display: flex;
        align-items: center;
        &__name {
            margin-left: 10px;
        }
    }
    &__message {
        position: relative;
        display: flex;
        margin: 5px 0;
    }
    &__message_my {
        justify-content: flex-end;
    }
    &__message_my .chat__text {
        background-color: #dcf8c6;
        text-align: right;
    }
    &__text {
        text-align: left;
        padding: 12px;
        background-color: #fff;
        border-radius: 10px;
        font-size: 14px;
    }
    &__message_frend .chat__text::before {
        content: '';
        position: absolute;
        top: 0;
        left: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient( -135deg,#fff 0%, #fff 50%, transparent 50%, transparent);
    }
    &__message_my .chat__text::before {
        content: '';
        position: absolute;
        top: 0;
        right: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient( 135deg,#dcf8c6 0%, #dcf8c6 50%, transparent 50%, transparent);
    }
    &__time {
        display: block;
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.5;
    }
    &-frame {
        height: 100%;
        width: 100%;
        &__main {
            height: 100%;
        }
        &__wrapper {
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }
    }

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
    &:last-child {
        margin: 0;
    }
}


.input {
    position: relative;
    width: 90%;
    margin: 0 20px;
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 30px;
    font-size: 16px;
    &-form {
        position: relative;
        width: 100%;
        height: 60px;
        background: #f0f0f0;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__icon {
        cursor: pointer;
        font-size: 29px;
        color: #51585c;
    }
    &__icon:nth-child(1) {
        margin-right: 15px;
    }
}


</style>