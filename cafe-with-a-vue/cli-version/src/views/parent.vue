<template>
    <div>
       <child 
            @custom-event-name="updateMessage"
            v-for="item in list"
            :key="item"
            :item="item"
       >
       <template v-slot:top>
        <span>😎</span>     
        </template>
       <p>
            <span>🎊</span>
            Voici ma bannière personnalisée
            <span>💻</span>
        </p>
        <template v-slot:bottom>
            <span>🛩</span>
        </template>
        </child> 
       {{ message }}
    </div>
</template>

<script>
import child from "./child.vue"
export default {
  
    name: 'parent',
    components:{
        child
    },
    methods: {
        updateMessage(payload){
            this.message = payload.message
        }
    },
    data() {
       return {
         message: 'Pas de message !',
         list: ['pommes', 'bananes', 'cerises'],
         pageTitle: 'Ma liste de courses'
       }
    }
}
</script>