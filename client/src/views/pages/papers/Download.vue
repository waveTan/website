<template>
	<div class="container">
		<v-layout row wrap>
			<v-flex sm12 md6>
				<div class="centered whitepaper">
					<p>
						<I18N id="page.papers.whitepaper.info" />
					</p>
					<Dropdown
						:items="[
							{ title: 'page.papers.whitepaper.language.en' },
							{ title: 'page.papers.whitepaper.language.zh' }
						]"
						title="page.papers.whitepaper.download"
					/>
				</div>
			</v-flex>
			<v-flex sm12 md6>
				<div class="centered yellowpaper">
					<p>
						<I18N id="page.papers.yellowpaper.info" />
					</p>
					<Button>
						<I18N id="page.papers.yellowpaper.download" />
					</Button>
				</div>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import Dropdown from '@/components/vuetify/Dropdown';
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Dropdown,
			Button
		}
	};
</script>

<style scoped>
	.centered {
		padding: 50px;
		margin: 0 15px;
	}

	.whitepaper {
		background: rgba(255, 240, 0, 0.1);
	}

	.yellowpaper {
		background: rgba(255, 240, 0, 0.4);
	}
</style>
