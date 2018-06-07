<template>
	<div data-app>
		<v-progress-linear v-if="loadingStack > 0" :indeterminate="true"></v-progress-linear>
		<div v-if="Object.keys(appLoaded).length !== 0">
			<v-content>
				<v-container fill-height>
					<v-layout justify-center align-center>
						<v-flex shrink>
							<v-progress-circular
									:size="100"
									:width="15"
									:rotate="-90"
									:value="percentageLoader"
									color="primary"
							>
								{{percentageLoader}}%
							</v-progress-circular>
						</v-flex>
					</v-layout>
				</v-container>
			</v-content>
		</div>
		<div v-else>
			<HeaderLayout />
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import HeaderLayout from '@/views/layout/main/HeaderLayout';

	export default {
		computed: {
			loadingStack()
			{
				return this.$store.getters['app/loadingStack'].length;
			},
			appLoaded()
			{
				return this.$store.getters['app/appLoaded'];
			},
			percentageLoader()
			{
				if(this.loadingStack === 0) return 100;

				return ((this.loadingStack - Object.keys(this.appLoaded).length) * 100) / Object.keys(this.appLoaded).length;
			}
		},
		components: {
			HeaderLayout
		}
	};
</script>

<style>
	body {
		font-family: SofiaProLight, sans-serif;
		font-size: 16px;
		color: #445569;
		letter-spacing: 0;
		line-height: 25px;
	}

	h1 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 72px;
		color: #fff;
		text-align: center;
		width: 75%;
		margin: 60px auto 0 auto;
		letter-spacing: -0.77px;
		line-height: 88px;
	}

	h2 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 56px;
		color: #0a2140;
		letter-spacing: 0;
		line-height: 77px;
	}

	h3 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 28px;
		color: #0a2140;
		letter-spacing: -0.88px;
		line-height: 34px;
	}

	h4 {
		font-family: SofiaProLight, sans-serif;
		font-size: 24px;
		opacity: 0.7;
		color: #445569;
		letter-spacing: 0;
		line-height: 32px;
	}

	.container {
		position: relative;
		padding-top: 40px;
		margin: auto;
		max-width: 1280px;
	}

	.header {
		position: absolute;
		top: 120px;
		width: 100%;
	}

	.playButtonContainer {
		width: 90px;
		margin: 40px auto 0 auto;
	}

	button.play-button {
		background: #fff;
		box-shadow: -1px 12px 16px 0 rgba(6, 27, 55, 1);
		height: 90px;
		width: 90px;
		border-radius: 45px;
	}

	button.play-button img {
		padding: 6px 0 0 10px;
	}

	.section {
		position: static;
		padding-top: 0;
	}

	.section.white {
		background: white;
	}

	.section.grey {
		background-image:
			linear-gradient(
					-134deg,
					#f1f4f8 0%,
					#eff4f8 14%,
					#eff4f8 18%,
					#eff4f8 20%,
					#ecf4f9 46%,
					#ebf4f9 49%,
					#ebf4f9 54%,
					#ebf4f9 57%,
					#eaf4f9 65%,
					#e7f4fa 86%,
					#e7f4fa 90%,
					#e7f4fa 90%,
					#e6f4fa 92%,
					#e6f4fa 100%
				);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
	}

	.center {
		text-align: center;
	}

	.menu__content {
		box-shadow: none;
	}

	.menu__content .list__tile {
		padding: 0 34px;
	}

	.menu__content .item:not(:first-child) .list__tile {
		border-top: 1px solid #445569;
	}

	.menu__content .item:first-child .list__tile {
		padding-top: 10px;
	}
</style>
