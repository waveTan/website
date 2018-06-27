<template>
	<v-container grid-list-md text-xs-center class="partnerItems">
		<v-layout row wrap>
			<v-flex v-for="(item, i) in items" :key="i" sm6 md3>
				<v-card flat tile>
					<a :href="item.link" target="_blank">
						<v-card-media
							:class="{ box: container }"
							:src="`${imageDirectory}${item.image}`"
							height="150px"
						/>
					</a>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				required: true
			},
			container: {
				type: Boolean,
				default: false
			}
		},
		data()
		{
			return {
				imageDirectory: this.$store.getters['genericEndPoints/strapiUrl']
			};
		}
	};
</script>

<style>
	.container.partnerItems .card__media.box {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.container.partnerItems .card__media {
		padding: 45px 29px;
	}

	.container.partnerItems .card__media__background {
		position: initial;
	}

	.container.partnerItems .layout .flex {
		padding: 16px;
	}
</style>
