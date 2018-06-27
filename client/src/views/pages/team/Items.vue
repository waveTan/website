<template>
	<v-container grid-list-md text-xs-center class="teamItems">
		<v-layout row wrap>
			<v-flex v-for="(item, i) in items" :key="i" sm6 md4>
				<v-card flat tile>
					<v-card-media
						:src="`${imageDirectory}${item.image}`"
						height="340px"
					/>
					<v-card-title primary-title>
						<div>
							<h4 class="headline mb-0">{{ item.name }}</h4>
							<p class="center jobTitle">{{ item.title }}</p>
							<p class="center readMore">
								<I18N id="page.team.learnMore" /> <img src="/static/images/icons/arrow-right-grey.png" alt="">
							</p>
						</div>
					</v-card-title>
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
	.container.teamItems .card__media.box {
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
	}

	.container.teamItems .card__media {
		padding: 0 29px;
	}

	.container.teamItems .card__title div {
		width: 100%;
	}

	.container.teamItems .card__title p {
		margin: 10px 0;
	}

	.container.teamItems .card__media__background {
		position: initial;
	}

	.container.teamItems .layout .flex {
		padding: 16px;
	}

	.container.teamItems .jobTitle {
		font-size: 16px;
		color: #56c400;
		letter-spacing: 0;
		line-height: 25.89px;
	}

	.container.teamItems .readMore {
		font-size: 18px;
		color: #445569;
		letter-spacing: 0;
		line-height: 29.12px;
	}
</style>
