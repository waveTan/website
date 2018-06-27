<template>
	<div class="section container">
		<h2 class="center"><I18N id="page.team.developers" /></h2>
		<Items :items="items" />
	</div>
</template>

<script>
	import Items from '@/views/pages/team/Items';

	export default {
		components: {
			Items
		},
		props: {
			items: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style scoped>
	.section {
		margin-top: -260px;
		position: relative;
	}

	h2 {
		color: #fff;
	}
</style>
