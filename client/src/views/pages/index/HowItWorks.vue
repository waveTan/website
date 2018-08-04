<template>
	<div class="section grey clipPath">
		<div class="container howItWorks">
			<div class="center">
				<h2><I18N id="page.index.howItWorks.title" /></h2>
				<h5><I18N id="page.index.howItWorks.subTitle" /></h5>
				<v-container grid-list-xl text-xs-center>
					<v-layout row wrap>
						<v-flex md4 xs12>
							<img src="@/assets/images/animations/multiple-chains.svg" width="156px">
							<h4><I18N id="page.index.howItWorks.multipleChains.title" /></h4>
							<p><I18N id="page.index.howItWorks.multipleChains.p1" /></p>
							<p><I18N id="page.index.howItWorks.multipleChains.p2" /></p>
						</v-flex>
						<v-flex md4 xs12>
							<img src="@/assets/images/animations/smart-contracts.svg" width="156px">
							<h4><I18N id="page.index.howItWorks.smartContracts.title" /></h4>
							<p><I18N id="page.index.howItWorks.smartContracts.p1" /></p>
							<p><I18N id="page.index.howItWorks.smartContracts.p2" /></p>
						</v-flex>
						<v-flex md4 xs12>
							<img src="@/assets/images/animations/proof-of-credit.svg" width="156px">
							<h4><I18N id="page.index.howItWorks.proofOfCredit.title" /></h4>
							<p><I18N id="page.index.howItWorks.proofOfCredit.p1" /></p>
							<p><I18N id="page.index.howItWorks.proofOfCredit.p2" /></p>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex md2 xs12>&nbsp;</v-flex>
						<v-flex md4 xs12>
							<img src="@/assets/images/animations/customizable.svg" width="156px">
							<h4><I18N id="page.index.howItWorks.customizable.title" /></h4>
							<p><I18N id="page.index.howItWorks.customizable.p1" /></p>
							<p><I18N id="page.index.howItWorks.customizable.p2" /></p>
						</v-flex>
						<v-flex md4 xs12>
							<img :src="sustainableImprovement" width="156px">
							<h4><I18N id="page.index.howItWorks.sustainableImprovement.title" /></h4>
							<p><I18N id="page.index.howItWorks.sustainableImprovement.p1" /></p>
							<p><I18N id="page.index.howItWorks.sustainableImprovement.p2" /></p>
						</v-flex>
						<v-flex md2 xs12>&nbsp;</v-flex>
					</v-layout>
				</v-container>
			</div>
		</div>
	</div>
</template>

<script>
	import { detect } from 'detect-browser';

	export default {
		data()
		{
			const browserExt = detect().name === 'firefox' ? '-ff' : '';

			return {
				sustainableImprovement: require(`@/assets/images/animations/sustainable-improvement${browserExt}.svg`)
			};
		}
	};
</script>

<style scoped>
	.howItWorks {
		padding: 200px 0 135px 0;
	}

	@media screen and (max-width: 800px) {
		.howItWorks {
			padding: 100px 0 70px 0;
		}
	}

	@media screen and (max-width: 400px) {
		.howItWorks {
			padding: 100px 0 0 0;
		}
	}
</style>
