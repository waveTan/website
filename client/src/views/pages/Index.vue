<template>
	<div class="page">
		<HeaderMeta title="home.title" />
		<p>To get started, edit files in <code>./client</code> and save.</p>
		<SwitchLanguage />
	</div>
</template>

<script>
	import SwitchLanguage from '@/components/SwitchLanguage';

	export default {
		components: {
			SwitchLanguage
		}
	};
</script>

<style scoped>
	.fa-linode {
		font-size: 50px;
	}
</style>
