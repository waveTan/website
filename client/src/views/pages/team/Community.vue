<template>
	<div class="section container">
		<h2 class="center"><I18N id="page.team.community" /></h2>
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
