<template>
	<div class="section">
		<div class="container">
			<h3><I18N id="page.index.latestHappenings.title" /></h3>
		</div>
		<div class="container">
			<swiper :options="swiperOption">
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS now trading on BITFINEX</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS and Devery sign a strategic partnership in February 2018</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Yellowpaper Released</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Whitepaper Released</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS and bitshares signed a strategic agreement</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS progress report</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Community Manager Opening</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Whitepaper Released</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Test-Net Upgrade: Version VO.9.10</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Token Swap Procedure</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>NULS Strike A Deal With MC Payment</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<swiper-slide>
					<v-card>
						<v-card-media :src="require('@/assets/images/test-news-img.jpg')" height="180px" />
						<v-card-title primary-title>
							<h5>A Community in Consensus, Collaboration & Competition</h5>
						</v-card-title>
					</v-card>
				</swiper-slide>
				<div slot="pagination" class="swiper-pagination" />
			</swiper>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import swiperOption from '@/utils/sliderConfiguration';

	export default {
		components: {
			swiper,
			swiperSlide
		},
		data()
		{
			return {
				swiperOption: swiperOption()
			};
		}
	};
</script>

<style scoped>
	h5 {
		opacity: 1;
		letter-spacing: -0.5px;
		line-height: 27px;
	}

	.swiper-container {
		padding: 0 0 20px 5px;
	}

	.card__title {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.card {
		border-radius: 8px;
	}
</style>
