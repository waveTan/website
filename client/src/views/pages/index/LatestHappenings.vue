<template>
	<div class="section">
		<div class="container">
			<h3><I18N id="page.index.latestHappenings.title" /></h3>
		</div>
		<div v-if="pageLoading" class="section container">
			<div class="centered">
				<v-progress-circular class="centered" :size="50" indeterminate color="primary" />
			</div>
		</div>
		<div v-else class="container">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, i) in getItems" :key="i" ref="items">
					<router-link :to="{ name: 'newsItem', params: { id: item.id, title: item.title } }">
						<v-card>
							<v-card-media :src="`${imageDirectory}${item.image}`" height="180px" />
							<v-card-title :style="cardTitleHeight" primary-title>
								<h5>{{ item.title }}</h5>
							</v-card-title>
						</v-card>
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link :to="{ name: 'news' }">
						<v-card>
							<v-card-media class="more" height="180px" />
							<v-card-title :style="cardTitleHeight" primary-title>
								<h5><I18N id="page.index.latestHappenings.more" /></h5>
							</v-card-title>
						</v-card>
					</router-link>
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
				swiperOption: swiperOption(),
				imageDirectory: this.$store.getters['items/strapiUrl'],
				cardTitleHeight: ''
			};
		},
		updated()
		{
			if(!this.$refs.items) return;

			let tallestItem = 0;

			this.$refs.items.forEach((item) => (tallestItem = tallestItem < item.$el.offsetHeight ? item.$el.offsetHeight : tallestItem));

			const newHeight = `height: ${tallestItem - 180}px; align-items: normal;`;

			if(this.cardTitleHeight === '')
			{
				this.cardTitleHeight = newHeight;
			}
		},
		computed: {
			pageLoading()
			{
				return this.$store.getters['app/pageLoading'];
			},
			getItems()
			{
				if(!this.$store.getters['items/getItems']('news/latest'))
				{
					this.$store.dispatch('items/loadItems', 'news/latest');
				}

				if(!this.$store.getters['items/getItems']('news/latest'))
				{
					return [];
				}

				return this.$store.getters['items/getItems']('news/latest');
			}
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

	.more {
		/*background: url('~@/assets/images/news.jpg');*/
	}
</style>
