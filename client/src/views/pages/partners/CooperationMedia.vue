<template>
	<div class="section grey clipPath">
		<div class="container">
			<h2 class="center"><I18N id="page.partnerships.cooperationMedia" /></h2>
			<Items :items="items" />
		</div>
	</div>
</template>

<script>
	import Items from '@/views/pages/partners/Items';

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
