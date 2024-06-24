<template>
    <div class="radio">
        <h2>Radio</h2>
        <button @click="sendMessage">Envoyer un message</button>
    </div>
</template>

<script>
export default {
    name: 'radio',
    methods: {
        sendMessage() {
            this.$emit('message-sent', {
                message: 'Mon magnifique message 🤩',
            })

        }
    }
}
</script>

<style lang="scss">
.radio{
    margin-bottom: 15px;
}
</style>
