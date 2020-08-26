<template lang="html">
    <div>
        <input type="text" v-model="searchInput" />
        <ul>
            <li v-for="animal in filteredAnimals"
                :key="animal">
                {{ animal }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            animals: [
                'cat', 'dog', 'parrot'
            ],
            searchInput: ''
        }
    },
    computed: {
        filteredAnimals() {
            return this.animals.filter(
                animal => animal.includes(this.searchInput)
            );
        }
    }
}
</script>

<style lang="css" scoped>
</style>
