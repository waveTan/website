<template>
	<div class="section grey">
		<div class="container">
			<h3><I18N id="page.index.roadmap.title" /></h3>
			<div>
				<div class="buttonParent" @click="setActive('ice')">
					<Button
						:class="isActive('ice') ? 'white' : 'transparent'"
						:textClass="isActive('ice') ? 'green' : 'black'"
						:border="isActive('ice')"
						colour="roadmapButton"
					>
						<I18N id="page.index.roadmap.ice.title" />
					</Button>
				</div>
				<div class="buttonParent" @click="setActive('water')">
					<Button
						:class="isActive('water') ? 'white' : 'transparent'"
						:textClass="isActive('water') ? 'green' : 'black'"
						:border="isActive('water')"
						colour="roadmapButton"
					>
						<I18N id="page.index.roadmap.water.title" />
					</Button>
				</div>
				<div class="buttonParent" @click="setActive('steam')">
					<Button
						:class="isActive('steam') ? 'white' : 'transparent'"
						:textClass="isActive('steam') ? 'green' : 'black'"
						:border="isActive('steam')"
						colour="roadmapButton"
					>
						<I18N id="page.index.roadmap.steam.title" />
					</Button>
				</div>
			</div>
		</div>
		<div class="roadmap">
			<div :class="active" class="line" />
			<div class="container">
				<swiper v-if="isActive('ice')" :options="swiperOption">
					<swiper-slide>
						<p class="date"><I18N id="page.index.roadmap.ice.mainNetTesting.date" /></p>
						<div class="triangle" />
						<p class="bold"><I18N id="page.index.roadmap.ice.mainNetTesting.p1" /></p>
						<p><I18N id="page.index.roadmap.ice.mainNetTesting.p2" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.mainNetTesting.p3" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.mainNetTesting.p4" /></p>
					</swiper-slide>
					<swiper-slide>
						<p class="date"><I18N id="page.index.roadmap.ice.continuousImprovement.date" /></p>
						<div class="triangle active" />
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p1" /></p>
						<p><I18N id="page.index.roadmap.ice.continuousImprovement.p2" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p3" /></p>
						<p><I18N id="page.index.roadmap.ice.continuousImprovement.p4" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p5" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p6" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p7" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.continuousImprovement.p8" /></p>
					</swiper-slide>
					<swiper-slide>
						<p class="date"><I18N id="page.index.roadmap.ice.releaseSmartContractModule.date" /></p>
						<div class="triangle" />
						<p class="bold"><I18N id="page.index.roadmap.ice.releaseSmartContractModule.p1" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.releaseSmartContractModule.p2" /></p>
						<p class="bold"><I18N id="page.index.roadmap.ice.releaseSmartContractModule.p3" /></p>
						<p><I18N id="page.index.roadmap.ice.releaseSmartContractModule.p4" /></p>
					</swiper-slide>
					<swiper-slide>
						<p class="date"><I18N id="page.index.roadmap.ice.3NewProgrammingLanguages.date" /></p>
						<div class="triangle" />
						<p class="bold"><I18N id="page.index.roadmap.ice.3NewProgrammingLanguages.p1" /></p>
						<p><I18N id="page.index.roadmap.ice.3NewProgrammingLanguages.p2" /></p>
					</swiper-slide>
					<swiper-slide>Roadmap Demo Slide 6</swiper-slide>
					<swiper-slide>Roadmap Demo Slide 7</swiper-slide>
					<swiper-slide>Roadmap Demo Slide 8</swiper-slide>
					<swiper-slide>Roadmap Demo Slide 9</swiper-slide>
					<div slot="pagination" class="swiper-pagination" />
				</swiper>
				<div v-if="isActive('water')">
					<div class="items">
						<div class="item">
							<div class="triangle" />
							<p class="bold"><I18N id="page.index.roadmap.water.one.p1" /></p>
							<p><I18N id="page.index.roadmap.water.one.p2" /></p>
							<p><I18N id="page.index.roadmap.water.one.p3" /></p>
							<p><I18N id="page.index.roadmap.water.one.p4" /></p>
							<p><I18N id="page.index.roadmap.water.one.p5" /></p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p><I18N id="page.index.roadmap.water.two.p1" /></p>
							<p><I18N id="page.index.roadmap.water.two.p2" /></p>
							<p><I18N id="page.index.roadmap.water.two.p3" /></p>
							<p><I18N id="page.index.roadmap.water.two.p4" /></p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p class="bold"><I18N id="page.index.roadmap.water.three.p1" /></p>
							<p><I18N id="page.index.roadmap.water.three.p2" /></p>
						</div>
					</div>
				</div>
				<div v-if="isActive('steam')">
					<div class="items">
						<div class="item">
							<div class="triangle" />
							<p class="bold"><I18N id="page.index.roadmap.steam.one.p1" /></p>
							<p><I18N id="page.index.roadmap.steam.one.p2" /></p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p><I18N id="page.index.roadmap.steam.two.p1" /></p>
							<p><I18N id="page.index.roadmap.steam.two.p2" /></p>
							<p><I18N id="page.index.roadmap.steam.two.p3" /></p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p class="bold"><I18N id="page.index.roadmap.steam.three.p1" /></p>
							<p><I18N id="page.index.roadmap.steam.three.p2" /></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import Button from '@/components/vuetify/Button';
	import swiperOption from '@/utils/sliderConfiguration';

	export default {
		components: {
			Button,
			swiper,
			swiperSlide
		},
		data()
		{
			return {
				active: 'ice',
				swiperOption: swiperOption()
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
	.buttonParent {
		display: inline-block;
	}

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

	.roadmap .items {
		display: flex;
	}

	.roadmap .item {
		width: 33%;
		padding: 0 30px;
	}

	.line.water,
	.line.steam {
		position: relative;
		top: -67px;
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
		margin: 0 0 35px 6px;
	}

	.triangle.active {
		box-shadow: 4px 4px;
		color: #3e8900;
	}

	.swiper-pagination {
		bottom: -4px !important;
	}
</style>
