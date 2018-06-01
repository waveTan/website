<template>
    <div class="counter-wrapper">
        <div class="counter">
            {{ count }}
        </div>
        <v-tooltip top>
            <v-btn color="success" slot="activator" @click="$store.commit('counter/INCREMENT')">Increment</v-btn>
            <span>myButton</span>
        </v-tooltip>
        <v-btn color="error" @click="$store.commit('counter/DECREMENT')">Decrement</v-btn>
        <v-btn color="info" @click="$store.dispatch('counter/incrementAsync')">Increment Async</v-btn>
    </div>
</template>

<script>
	export default {
		computed: {
			count() {
				return this.$store.state.counter.count
			}
		}
	}
</script>

<style>
    .counter {
        margin: 100px auto;
        border-radius: 3px;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        font-size: 5rem;
        user-select: none;
    }
</style>
