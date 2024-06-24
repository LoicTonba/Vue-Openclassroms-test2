<script>
export default {
    name: 'BaseButton',
   
}
</script>

<template>
    

    <button v-on="$listeners">
       <slot name="panier"></slot>
    </button>
</template>

<style></style>
