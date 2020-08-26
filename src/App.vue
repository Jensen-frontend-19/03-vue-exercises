<template>
    <div id="app">
        <ChooseDelivery />
        <LimitedInput />
    </div>
</template>

<script>
import ChooseDelivery from './components/ChooseDelivery.vue'
import LimitedInput from './components/LimitedInput.vue'

export default {
    name: 'App',
    components: {
        ChooseDelivery, LimitedInput
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
