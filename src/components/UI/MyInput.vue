<template>
    <input class="input" type="text" :placeholder="placeholder">
</template>

<script>

export default {
    name: 'my-input',
    props: {
        placeholder: {
            type: [String, Number]
        }
    }

}
</script>

<style scoped>

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

</style>
