<template>
	<div class="section blue">
		<h2>Download NULS Wallet</h2>
		<p>NULS wallet is developed by NULS core technical team</p>
		<p>Supported on various platforms</p>
		<Dropdown
				title="Computer Wallet"
				:items="[
					{ title: 'Windows Download' },
					{ title: 'MacOS Download' }
				]"
		/>
		<Dropdown
				title="Mobile Wallet"
				:items="[
					{ title: 'Android' },
					{ title: 'iPhone' }
				]"
		/>
		<Button colour="blue" icon="arrow-left">Web Wallet</Button>
	</div>
</template>

<script>
	import Dropdown from '@/components/vuetify/Dropdown';
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Dropdown,
			Button
		}
	};
</script>
