<template>
    <div>
        <h1>Récepteur</h1>
        <Radio @message-sent="updateMessage" />
        {{ message }}
    </div>
</template>

<script>
import Radio from "../views/Radio.vue"

export default {
    name: 'receiver',
    components: {
        Radio
    },
    methods: {
        updateMessage(payload) {
            this.message = payload.message
        }
    },
    data: () => ({
        message: "Pas de message",
    }),
}

</script>

<style scoped lang="scss">

</style>
