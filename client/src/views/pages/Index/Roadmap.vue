<template>
	<div class="section white">
		<div class="container">
			<h3>Roadmap</h3>
			<div>
				<div class="buttonParent" @click="setActive('ice')">
					<Button :class="isActive('ice') ? 'white' : 'transparent'" colour="roadmapButton">ICE</Button>
				</div>
				<div class="buttonParent" @click="setActive('water')">
					<Button :class="isActive('water') ? 'white' : 'transparent'" colour="roadmapButton">WATER</Button>
				</div>
				<div class="buttonParent" @click="setActive('steam')">
					<Button :class="isActive('steam') ? 'white' : 'transparent'" colour="roadmapButton">STEAM</Button>
				</div>
			</div>
		</div>
		<div class="roadmap">
			<div :class="active" class="line" />
			<div class="container">
				<swiper v-if="isActive('ice')" :options="swiperOption">
					<swiper-slide>
						<p class="date">2018.03</p>
						<div class="triangle" />
						<p class="bold">Main-net testing</p>
						<p>Complete the main-net's development, testing phase commence</p>
						<p class="bold">Improve the technical design documentation</p>
						<p class="bold">Establish and expand the open-source development community</p>
					</swiper-slide>
					<swiper-slide>
						<p class="date">2018.05</p>
						<div class="triangle active" />
						<p class="bold">Continuous improvement</p>
						<p>Complete development of basic modules. Continuously improve build-in modules, such as smart contracts, multi-chain modules and cross-chain consensus.</p>
						<p class="bold">Application Promotion</p>
						<p>Start and promte more applications to be accessed within the NULS ecosystem.</p>
						<p class="bold">Main-net launch</p>
						<p class="bold">Release PC wallet</p>
						<p class="bold">Release mobile wallet</p>
						<p class="bold">Release blockchain explorer</p>
					</swiper-slide>
					<swiper-slide>
						<p class="date">2018.07</p>
						<div class="triangle" />
						<p class="bold">Release Smart Contract module</p>
						<p class="bold">Inchain joins NULS</p>
						<p class="bold">Technology: main-chain's ecosystem improvements</p>
						<p>Improve the main-chains overall ecosystem, including a blockchain browser, e-wallet, mobile wallet, Smart Contact virtual machinbe compiler, development tools, and multilingual adapters.</p>
					</swiper-slide>
					<swiper-slide>
						<p class="date">2018.10</p>
						<div class="triangle" />
						<p class="bold">3 New programming languages</p>
						<p>Add support for 3 programming languages to Smart Contracts</p>
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
							<p class="bold">Technology</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum augue, pretium in placerat sit amet, tristique id purus. Nunc sit amet hendrerit tortor. Fusce vel odio metus. Duis at enim volutpat,
							fringilla diam et, efficitur ante. Nulla facilisi. Fusce scelerisque luctus tristique. Nam imperdiet nulla quis pellentesque laoreet. Proin varius libero sed nibh luctus finibus. Duis convallis
							pellentesque ipsum id lobortis. Vestibulum dictum semper cursus. Sed faucibus enim ac purus bibendum malesuada.</p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p>Lorem ipsum dolor Nunc sit amet hendrerit tortor. Fusce vel odio metus. Duis at enim volutpat, fringilla diam et, efficitur ante. Nulla facilisi. Fusce scelerisque luctus tristique.</p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p class="bold">Ecology</p>
							<p>Lorem ipsum vestibulum dictum semper cursus. Sed faucibus enim ac purus bibendum malesuada. Pellentesque pretium lacus erat, in lacinia nisi vulputate at. Morbi auctor arcu non pulvinar blandit.
							Donec id risus lacus. Pellentesque aliquam nulla leo, sit amet interdum tellus varius ac. Curabitur dignissim, purus id ullamcorper placerat, tellus massa auctor massa, vel feugiat mauris nisi ut neque.</p>
						</div>
					</div>
				</div>
				<div v-if="isActive('steam')">
					<div class="items">
						<div class="item">
							<div class="triangle" />
							<p class="bold">Technology</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper augue, vel vestibulum ligula convallis sit amet. Mauris sed efficitur ante. Nullam malesuada ligula ligula, in venenatis nunc fermentum ac.</p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in nisl eu erat tincidunt molestie. Integer sit amet posuere dui. Quisque vitae quam dui. Cras tincidunt vitae odio eu tempor.
							Suspendisse eget finibus nisl. Nulla porttitor, est sed fermentum consequat, sapien est maximus urna, in consequat nibh lectus eget enim. In nec justo tristique, placerat erat ut, faucibus nulla.
							Sed nisi urna, scelerisque ac eleifend ac, faucibus quis odio.</p>
						</div>
						<div class="item">
							<div class="triangle" />
							<p class="bold">Ecology</p>
							<p>Donec in erat cursus, commodo enim sit amet, porttitor nulla. Proin nec dolor et purus pretium tincidunt. Aliquam cursus vel elit at eleifend. Donec molestie libero vel eros accumsan fringilla.
							Nunc ac lorem et nunc eleifend elementum id fringilla est. Phasellus dapibus lobortis nulla, eget bibendum dolor vestibulum vel. Ut pulvinar enim ut ligula lobortis imperdiet. Vestibulum ut nunc eu
							sapien vulputate semper. Morbi iaculis dictum leo quis dictum. </p>
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
				swiperOption: {
					slidesPerView: 4,
					spaceBetween: 30,
					grabCursor: true,
					pagination: {
						el: '.swiper-pagination'
					}
				}
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
		bottom: -7px !important;
	}
</style>
