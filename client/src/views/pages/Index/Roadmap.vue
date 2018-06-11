<template>
	<div class="section white">
		<div class="container">
			<h3>Roadmap</h3>
			<div>
				<Button colour="roadmapButton white">ICE</Button>
				<Button colour="roadmapButton transparent">WATER</Button>
				<Button colour="roadmapButton transparent">STEAM</Button>
			</div>
		</div>
		<div class="roadmap">
			<div class="line"></div>
			<div class="container">
				<v-layout row wrap>
					<v-flex xs3>
						<div class="item">
							<p class="date">2018.03</p>
							<div class="triangle"></div>
							<p class="bold">Main-net testing</p>
							<p>Complete the main-net's development, testing phase commence</p>
							<p class="bold">Improve the technical design documentation</p>
							<p class="bold">Establish and expand the open-source development community</p>
						</div>
					</v-flex>
					<v-flex xs3>
						<div class="item">
							<p class="date">2018.05</p>
							<div class="triangle active"></div>
							<p class="bold">Continuous improvement</p>
							<p>Complete development of basic modules. Continuously improve build-in modules, such as smart contracts,
								multi-chain modules and cross-chain consensus.</p>
							<p class="bold">Application Promotion</p>
							<p>Start and promte more applications to be accessed within the NULS ecosystem.</p>
							<p class="bold">Main-net launch</p>
							<p class="bold">Release PC wallet</p>
							<p class="bold">Release mobile wallet</p>
							<p class="bold">Release blockchain explorer</p>
						</div>
					</v-flex>
					<v-flex xs3>
						<div class="item">
							<p class="date">2018.07</p>
							<div class="triangle"></div>
							<p class="bold">Release Smart Contract module</p>
							<p class="bold">Inchain joins NULS</p>
							<p class="bold">Technology: main-chain's ecosystem improvements</p>
							<p>Improve the main-chains overall ecosystem, including a blockchain browser, e-wallet, mobile wallet, Smart Contact virtual machinbe compiler,
								development tools, and multilingual adapters.</p>
						</div>
					</v-flex>
					<v-flex xs3>
						<div class="item">
							<p class="date">2018.10</p>
							<div class="triangle"></div>
							<p class="bold">3 New programming languages</p>
							<p>Add support for 3 programming languages to Smart Contracts</p>
						</div>
					</v-flex>
				</v-layout>
			</div>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		},
		data()
		{
			return {
				active: 'ice'
			};
		},
		methods: {
			setActive(key)
			{
				this.active = key;
			},
			isActive(key)
			{
				return this.active === key;
			}
		}
	};
</script>

<style>
	.button.roadmapButton .btn__content {
		font-size: 24px;
		letter-spacing: 1px;
		line-height: 76px;
		padding: 0 43px;
	}

	.roadmap {
		margin-top: 124px;
	}

	.roadmap .line {
		background: #87e300;
		height: 2px;
		width: 100%;
	}

	.roadmap .container {
		margin-top: -124px;
	}

	.roadmap .item {
		padding-right: 45px;
	}

	p.bold {
		font-family: SofiaProRegular, sans-serif;
		font-size: 18px;
		color: #0a2140;
		letter-spacing: -0.41px;
		line-height: 22px;
	}

	p.date {
		font-family: SofiaProRegular, sans-serif;
		font-size: 16px;
		color: #445569;
		letter-spacing: -0.53px;
		padding-bottom: 25px;
	}

	.triangle {
		transform: rotate(-315deg);
		background-image: linear-gradient(-180deg, #8fe400 0%, #56c400 100%);
		height: 32px;
		width: 32px;
		margin-bottom: 35px;
	}

	.triangle.active {
		box-shadow: 4px 4px;
		color: #3e8900;
	}
</style>
