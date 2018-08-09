<template>
	<div>
		<h4><I18N id="items.related" /></h4>
		<v-container grid-list-lg>
			<v-layout wrap>
				<v-flex
					v-for="(item, i) in items"
					:key="i"
					:class="{ image: item.image }"
					xs12
					:sm6="item.image"
					:md3="item.image"
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
				</v-flex>
			</v-layout>
		</v-container>
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
				items: [],
				imageDirectory: this.$store.getters['items/strapiUrl']
			}
		},
		async mounted()
		{
			const data = await this.$store.dispatch('itemsPro/search', { type: this.type, searchQuery: this.title, page: 1, limit: 4 });

			this.items = data.rows;
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
