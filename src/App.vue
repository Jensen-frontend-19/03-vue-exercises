<template>
    <div id="app">
        <ChooseDelivery />
        <LimitedInput />
        <SearchView />
    </div>
</template>

<script>
import ChooseDelivery from './components/ChooseDelivery.vue'
import LimitedInput from './components/LimitedInput.vue'
import SearchView from './components/search/SearchView.vue'

export default {
    name: 'App',
    components: {
        ChooseDelivery, LimitedInput, SearchView
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
