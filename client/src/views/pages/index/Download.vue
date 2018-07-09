<template>
	<div :class="{ main: padding, removeTopMargin: !padding }">
		<div class="container images">
			<img
				class="top"
				src="@/assets/images/animations/download-cube-small.svg"
				width="110px"
			>
			<div class="ipad" />
			<div class="iphone" />
			<img
				class="bottom"
				src="@/assets/images/animations/download-cube-large.svg"
				width="110px"
			>
			<img
				class="middle"
				src="@/assets/images/animations/download-cube-medium.svg"
				width="110px"
			>
		</div>
		<div class="section blue">
			<div class="container" />
		</div>
		<div class="container information">
			<h3><I18N id="page.index.download.title" /></h3>
			<p><I18N id="page.index.download.maintainers" /></p>
			<p><I18N id="page.index.download.platformSupport" /></p>
			<Dropdown
				:items="[
					{ title: 'page.index.download.platforms.windows' },
					{ title: 'page.index.download.platforms.mac' },
					{ title: 'page.index.download.platforms.linux' }
				]"
				title="page.index.download.computer"
			/>
			<Button
				colour="transparent"
				textClass="white"
				icon="arrow-right"
			>
				<I18N id="page.index.download.mobile"/>
			</Button>
			<!--<Dropdown
				:items="[
					{ title: 'page.index.download.platforms.android' },
					{ title: 'page.index.download.platforms.iPhone' }
				]"
				title="page.index.download.mobile"
			/>-->

			<Button
				colour="transparent"
				textClass="white"
				icon="arrow-right"
			>
				<I18N id="page.index.download.platforms.web" />
			</Button>
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
		},
		props: {
			padding: {
				type: Boolean,
				default: true
			}
		}
	};
</script>

<style scoped>
	h3 {
		color: #fff;
	}

	.ipad {
		background: url('~@/assets/images/iPad.png') no-repeat;
		position: absolute;
		/*left: 410px; !* 450 *!*/
		top: 160px;
		width: 1414px;
		height: 664px;
	}

	.iphone {
		background: url('~@/assets/images/iPhone.png') no-repeat;
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

	.removeTopMargin {
		margin-top: -156px;
		margin-bottom: 310px;
	}

	.container.information {
		position: relative;
		top: -610px;
		z-index: 2;
	}

	.container.images {
		position: relative;
		top: 85px;
		left: 390px;
		z-index: 1;
	}

	p {
		color: #fff;
		opacity: 0.7;
	}

	.mobile.images {
		display: none;
		left: -100px;
		position: absolute;
	}

	.mobile.images .ipad {
		background-image: url('~@/assets/images/iPad-small.png');
		width: 703px;
		height: 330px;
		top: 110px;
	}

	.mobile.images .iphone {
		background-image: url('~@/assets/images/iPhone-small.png');
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

	.images .bottom {
		position: absolute;
		top: 700px;
		left: 360px;
	}

	.images .middle {
		position: absolute;
		top: 400px;
		left: 750px;
	}

	.images .top {
		position: absolute;
		top: 105px;
		left: 500px;
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
			top: -750px;
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
			top: -750px;
		}

		.mobile.images {
			margin-top: -70px;
		}

		.section.blue {
			height: 800px;
		}
	}
</style>
