<template>
	<div>
		<v-container grid-list-md text-xs-center class="teamItems">
			<v-layout row wrap>
				<v-flex v-for="(item, i) in items" :key="i" sm6 md3>
					<v-card>
						<div>
							<!--<v-card flat tile @click="open(i)">
								<div @click="open(i)">-->
							<v-card-media
								:src="`${imageDirectory}${item.image}`"
								height="200px"
							/>
							<v-card-title primary-title>
								<div>
									<h4>{{ item.name }}</h4>
									<p class="center jobTitle">{{ item.title }}</p>
									<!--<p class="center readMore">-->
									<!--<I18N id="page.team.learnMore" /> <img src="@/assets/images/icons/arrow-right-grey.png" alt="">-->
									<!--</p>-->
								</div>
							</v-card-title>
						</div>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<Dialog v-if="dialogState" :open="dialogState" dialogClass="teamMember">
			<v-layout row wrap>
				<v-flex lg5 md12>
					<v-card-media
						:src="`${imageDirectory}${dialogItem.image}`"
						height="500px"
						contain
					/>
				</v-flex>
				<v-flex lg7 md12>
					<div class="dialogContent">
						<h2>{{ dialogItem.name }}</h2>
						<p class="jobTitle">{{ dialogItem.title }}</p>
						<div v-html="compiledMarkdown" />
					</div>
				</v-flex>
			</v-layout>
		</Dialog>
	</div>
</template>

<script>
	import marked from 'marked';
	import Dialog from '@/components/vuetify/Dialog';

	export default {
		components: {
			Dialog
		},
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
				imageDirectory: this.$store.getters['items/strapiUrl'],
				dialogItemInt: null
			};
		},
		computed: {
			dialogState()
			{
				return this.dialogItemInt !== null;
			},
			dialogItem()
			{
				return this.items[this.dialogItemInt];
			},
			compiledMarkdown()
			{
				return marked(this.dialogItem.content, { sanitize: true });
			}
		},
		methods: {
			open(i)
			{
				this.dialogItemInt = null; // This turns it off so it detects a change
				this.$nextTick(() => (this.dialogItemInt = i));
			}
		}
	};
</script>

<style>
	.container.teamItems .card {
		cursor: pointer;
		box-shadow: none;
	}

	.container.teamItems .card__media {
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		margin: 0 29px;
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

	.dialog__content .jobTitle,
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

	.teamMember .dialogContent {
		padding: 0 20px;
	}
</style>
