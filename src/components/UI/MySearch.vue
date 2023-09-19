<template>
    
    <div class="search-chat">
        <div class="search-chat__input">
            <input :value="modelValue" @input="updateInput" class="search-input" type="text" :placeholder="placeholder">
            <slot></slot>
            
        </div>
        </div>
</template>

<script>
export default {
    name: 'search',
    props: {
        modelValue: [String, Number],
        placeholder: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style scoped>
.search-chat {
    position: relative;
    width: 100%;
    height: 50px;
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
}

.search-chat__input {
    width: 100%;
}

.search-input {
    width: 100%;
    outline: none;
    border: none;
    background: #fff;
    padding: 6px;
    height: 38px;
    border-radius: 30px;
    font-size: 14px;
    padding-left: 40px;
}

.search-input::placeholder {
    color: #bbb;
}

</style>