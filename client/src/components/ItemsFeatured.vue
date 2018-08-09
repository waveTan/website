<template>
	<div>
		<h4 v-if="items.length !== 0"><I18N id="items.featured" /></h4>
		<ul>
			<li
				v-for="(item, i) in items"
				:key="i"
				:class="{ image: item.image }"
			>
				<router-link :to="{ name: `${type}Item`, params: { id: item.id, title: item.title } }">
					<div v-if="item.image">
						<img :src="`${imageDirectory}${item.image}`"  >
					</div>
					<div>
						<h5>{{ item.title }}</h5>
						<span>{{ formatDate(item.created_at) }}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			type: {
				type: String,
				required: true
			}
		},
		data()
		{
			return {
				imageDirectory: this.$store.getters['items/strapiUrl']
			}
		},
		async mounted()
		{
			await this.$store.dispatch('itemsPro/loadFeaturedItems', { type: this.type });
		},
		computed: {
			items()
			{
				return this.$store.getters['itemsPro/getFeatured'](this.type);
			}
		},
		methods: {
			formatDate(date)
			{
				return moment(date).format('D MMMM YYYY');
			}
		}
	};
</script>

<style scoped>
	h4 {
		margin-top: 40px;
	}

	li {
		margin: 25px 0;
	}

	h5 {
		font-size: 19px;
		opacity: 1;
		line-height: 20px;
	}

	ul {
		list-style: none;
	}

	a:hover h5 {
		color: inherit;
	}

	img {
		height: 150px;
		width: 100%;
		object-fit: cover;
	}

	a {
		border: none;
	}

	a:hover {
		color: #56c400;
	}
</style>
