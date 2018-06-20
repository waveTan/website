<template>
	<div class="main">
		<div class="container images">
			<div class="ipad" />
			<div class="iphone" />
		</div>
		<div class="section blue">
			<div class="container" />
		</div>
		<div class="container information">
			<h3>Download NULS Wallet</h3>
			<p>NULS wallet is developed by NULS core technical team</p>
			<p>Supported on various platforms</p>
			<Dropdown
				:items="[
					{ title: 'Windows Download' },
					{ title: 'MacOS Download' }
				]"
				title="Computer Wallet"
			/>
			<Dropdown
				:items="[
					{ title: 'Android' },
					{ title: 'iPhone' }
				]"
				title="Mobile Wallet"
			/>
			<Button colour="blue" icon="arrow-left">Web Wallet</Button>
			<div class="mobile images">
				<div class="ipad" />
				<div class="iphone" />
			</div>
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
		height: 740px;
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
		top: 85px;
		left: 390px;
		z-index: 1;
	}

	.mobile.images {
		display: none;
		left: -100px;
		position: absolute;
	}

	.mobile.images .ipad {
		background-image: url('/static/images/iPad-small.png');
		width: 703px;
		height: 330px;
		top: 110px;
	}

	.mobile.images .iphone {
		background-image: url('/static/images/iPhone-small.png');
		width: 244px;
		height: 320px;
		top: 143px;
		left: 260px;
	}

	.main {
		height: 925px;
		overflow: hidden;
		margin-bottom: -40px;
		background: #eff4f8;
	}

	@media screen and (max-width: 990px) {
		.container.images {
			display: none;
		}

		.mobile.images {
			display: block;
		}
	}

	@media screen and (max-width: 350px) {
		.main {
			height: 1070px;
		}

		.container.information {
			top: -950px;
		}

		.mobile.images {
			margin-top: -70px;
		}

		.section.blue {
			height: 800px;
		}
	}

	@media screen and (max-width: 450px) {
		.main {
			height: 1070px;
		}

		.container.information {
			top: -950px;
		}

		.mobile.images {
			margin-top: -70px;
		}

		.section.blue {
			height: 800px;
		}
	}
</style>
