<template>
    <div class="input-form">
        <ion-icon class="input__icon" name="happy-outline"></ion-icon>
        <ion-icon class="input__icon" name="attach-outline"></ion-icon>
        <input class="input" type="text" placeholder="Type a message">
        <ion-icon class="input__icon" name="mic"></ion-icon>
    </div>
</template>

<script>

export default {
    name: 'my-input'

}
</script>

<style scoped>
.input-form {
    position: relative;
    width: 100%;
    height: 60px;
    background: #f0f0f0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
}

.input__icon {
    cursor: pointer;
    font-size: 29px;
    color: #51585c;
}

.input__icon:nth-child(1) {
    margin-right: 15px;
}

</style>
