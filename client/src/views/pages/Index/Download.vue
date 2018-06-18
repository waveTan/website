<template>
	<div class="main">
		<div class="container images">
			<div class="ipad"></div>
			<div class="iphone"></div>
		</div>
		<div class="section blue">
			<div class="container"></div>
		</div>
		<div class="container information">
			<h3>Download NULS Wallet</h3>
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

<style scoped>
	h3 {
		color: #fff;
		margin-top: 190px;
	}

	.ipad {
		background: url('/static/images/iPad.png') no-repeat;
		position: absolute;
		/*left: 410px; !* 450 *!*/
		top: 160px;
		width: 1414px;
		height: 664px;
	}

	.iphone {
		background: url('/static/images/iPhone.png') no-repeat;
		position: absolute;
		left: 440px; /* 880 */
		top: 235px;
		width: 500px;
		height: 657px;
	}

	.section {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
		height: 770px;
		position: relative;
		top: 30px;
	}

	.container.information {
		position: relative;
		top: -800px;
		z-index: 2;
	}

	.container.images {
		position: relative;
		top: 30px;
		left: 390px;
		z-index: 1;
	}

	.main {
		height: 840px;
	}
</style>
