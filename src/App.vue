<script>
import MainPage from './pages/MainPage.vue'
import UsersList from './components/UsersList.vue'

export default {
  components: {
    MainPage,
    UsersList,
  },
  data() {
    return {
      UsersInfo: [
                {id: 0, img: 'src/assets/user(1).png', name: 'Muhammad Shayan', message_1: 'hello'},
                {id: 1, img: 'src/assets/janku.png', name: 'Bratan', message_1: 'hi'},
                {id: 2, img: 'src/assets/janku2.png', name: 'Prikolist', message_1: 'Bonjorno'},
                {id: 3, img: 'src/assets/janku3.png', name: 'DeadInside', message_1: 'Hey'},
                {id: 4, img: 'src/assets/qwqw.png', name: 'Abu', message_1: 'Good morning'}
            ],
      HeadIcons: [
                {name: 'scan-circle-outline'},
                {name: 'chatbox'},
                {name: 'ellipsis-vertical'}
            ],
            
    
    }
  },

}

</script>

<template>
  
  <div class="container">
    <MainPage :UsersInfo="UsersInfo" :HeadIcons="HeadIcons"/>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz@9..144&family=Open+Sans:wght@300;400;500;600;700&family=Roboto&family=Space+Grotesk&display=swap');

*  {
    font-family: 'Open Sans', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 925px;
    min-width: none;
    background: linear-gradient(#009688 0%, #009688 130px, #d9dbd5 130px, #d9dbd5 100%);
    display: flex;
}

</style>
