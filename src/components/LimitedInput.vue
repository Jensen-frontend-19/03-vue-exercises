<template lang="html">
    <div>
        <input type="text" v-model="inputText" />
        <p> {{ message }} </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            inputText: ''
        }
    },
    computed: {
        message() {
            const maxLength = 40;
            if( this.inputText.length === 0 ) {
                return '';
            }
            let remaining = maxLength - this.inputText.length;
            return `There are ${remaining} charactes remaining.`;
        }
    }
}
</script>

<style lang="css" scoped>
</style>
