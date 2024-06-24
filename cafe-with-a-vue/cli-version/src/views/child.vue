<template>
    <div>
        <h2>Component child</h2>
        <p>Please, click on button</p>
        <button @click="emitCustomEvent">Emit Event</button>
        <div class="banner">
            <span v-if="topIcon" :class="topIcon">{{ topIcon }}</span>
            <slot name="top"></slot>
            <slot></slot>
            <span v-if="bottomIcon" :class="bottomIcon">{{ bottomIcon }}</span>
            <slot name="bottom"></slot>
        </div>
        <input type="checkbox" v-model="isPurchased" />
        <label>{{ item }}</label>
        <div class="vuex-example">
            <p>-------------------------------------------avec les states-----------------------------------------------------------</p>
            <p>La date stockée dans Vuex est le {{ $store.state.day }}--{{ $store.state.month }}--{{ $store.state.year }}</p>
            <p>La date stockée dans Vuex est le {{ day }}--{{ month }}--{{ year }}</p>
            <p>-------------------------------------------avec les getters-----------------------------------------------------------</p>
            <p>La date stockée dans Vuex est le {{ $store.getters.formattedDate }}</p>
            <p>La date stockée dans Vuex est le {{ formattedDate }}</p>
            <button @click="incrementDay">Incrémenter jour</button>
            <button @click="decrementDay">Décrémenter jour</button>
            <button @click="incrementMonth">Incrémenter mois</button>
            <button @click="decrementMonth">Décrémenter mois</button> <br><br>
            <p>La valeur du compteur est de = {{ count }}</p>
            <button @click="incrementCount">Incrémenter compteur</button>
            <button @click="decrementCount">Décrémenter compteur</button><br> <br>
            <button @click="SendUpdateCountAction">Mise à jour du compteur</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'child',
    methods: {
        emitCustomEvent() {
            this.$emit('custom-event-name', {
                message: 'Le message personnalisé de TONBA LOIC 🏃‍♂️'
            })
        },
        incrementDay() {
            this.$store.commit("INCREMENT_DAY")
        },
        decrementDay() {
            this.$store.commit("DECREMENT_DAY")
        },
        // incrementMonth() {
        //     this.$store.dispatch("incrementMonth")
        // },
        incrementCount() {
            this.$store.dispatch("incrementCount")
        },
        decrementCount() {
            this.$store.dispatch("decrementCount")
        },
        SendUpdateCountAction() {
            this.$store.dispatch("updateCount")
        },
        ...mapActions([
            "incrementMonth",
            "decrementMonth",
        ])
    },
    computed: {
      ...mapState(['year','month','day','count']) , 
      ...mapGetters(['formattedDate']) , 
    },
    props: {
        topIcon: String,
        leftIcon: String,
        text: String,
        rightIcon: String,
        bottomIcon: String,
    },
    data() {
        return {
            isPurchased: false
        }
    }
}
</script>

<style lang="scss">
.banner {
    background-color: rgba(51, 166, 105, 0.73);
    color: white;
    padding: 20px 0;
    margin: 20px 0;
    font-weight: bold;
}
.vuex-example{
    background-color: #ecb827
}
</style>
