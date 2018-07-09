<template>
	<div class="container">
		<v-layout row wrap>
			<v-flex sm12 md6>
				<div class="centered whitepaper">
					<p>
						<I18N id="page.papers.whitepaper.info" />
					</p>
					<Button :onClick="toggleWhitepaperDialog">
						<I18N id="page.papers.whitepaper.download" />
					</Button>
				</div>
			</v-flex>
			<v-flex sm12 md6>
				<div class="centered yellowpaper">
					<p>
						<I18N id="page.papers.yellowpaper.info" />
					</p>
					<Button :onClick="toggleYellowpaperDialog">
						<I18N id="page.papers.yellowpaper.download" />
					</Button>
				</div>
			</v-flex>
		</v-layout>
		<Dialog v-if="dialog.whitepaper" :open="dialog.whitepaper">
			<div>
				<h4><I18N id="page.papers.whitepaper.dialog.chooseLanguage" /></h4>
				<ul>
					<li><a :href="`${download}/white/NulsWhitepaper1.1.pdf`"><I18N id="page.papers.whitepaper.dialog.language.en" /></a></li>
					<li><a :href="`${download}/white/NULS_whitepaper_zh_V1.0.pdf`"><I18N id="page.papers.whitepaper.dialog.language.zh" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_Russia.pdf`"><I18N id="page.papers.whitepaper.dialog.language.ru" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_Korean.pdf`"><I18N id="page.papers.whitepaper.dialog.language.ko" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_JP.pdf`"><I18N id="page.papers.whitepaper.dialog.language.jp" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_Germany.pdf`"><I18N id="page.papers.whitepaper.dialog.language.ge" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_French.pdf`"><I18N id="page.papers.whitepaper.dialog.language.fr" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_Spanish.pdf`"><I18N id="page.papers.whitepaper.dialog.language.es" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_NL.pdf`"><I18N id="page.papers.whitepaper.dialog.language.nl" /></a></li>
					<li><a :href="`${download}/white/NulsWhitepaper1.1_portuguese.pdf`"><I18N id="page.papers.whitepaper.dialog.language.pt" /></a></li>
				</ul>
			</div>
		</Dialog>
		<Dialog v-if="dialog.yellowpaper" :open="dialog.yellowpaper">
			<div>
				<h4><I18N id="page.papers.yellowpaper.dialog.downloadSources" /></h4>
				<ul>
					<!--<li><a :href="`${download}/yellow/NulsYellowpaper1.1.pdf"><I18N id="page.papers.yellowpaper.dialog.source.mega" /></a></li>-->
					<!--<li><a :href="`${download}/yellow/NulsYellowpaper1.1.pdf"><I18N id="page.papers.yellowpaper.dialog.source.baidu" /></a></li>-->
					<li><a :href="`${download}/yellow/NulsYellowpaper1.1.pdf`"><I18N id="page.papers.yellowpaper.dialog.source.nuls" /></a></li>
				</ul>
			</div>
		</Dialog>
	</div>
</template>

<script>
	import Dropdown from '@/components/vuetify/Dropdown';
	import Button from '@/components/vuetify/Button';
	import Dialog from '@/components/vuetify/Dialog';

	export default {
		components: {
			Dialog,
			Dropdown,
			Button
		},
		data()
		{
			return {
				dialog: {
					whitepaper: false,
					yellowpaper: false
				},
				download: `${this.$store.getters['app/apiUrl']}/download/files/papers`
			};
		},
		methods: {
			toggleWhitepaperDialog()
			{
				this.dialog.whitepaper = false;
				this.$nextTick(() => (this.dialog.whitepaper = true));
			},
			toggleYellowpaperDialog()
			{
				this.dialog.yellowpaper = false;
				this.$nextTick(() => (this.dialog.yellowpaper = true));
			}
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
