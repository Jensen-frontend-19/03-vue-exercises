<template lang="html">
    <div class="">
        <label class="text">
            <input type="checkbox"
                @change="handleChange" />
            {{ text }}
        </label>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            text: 'Leverans om 5 dagar'
        }
    },
    methods: {
        handleChange(event) {
            const isChecked = event.target.checked;
            if( isChecked ) {
                this.text = 'Valde express, leverans om 3 dagar';
            } else {
                this.text = 'Leverans om 5 dagar';
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
