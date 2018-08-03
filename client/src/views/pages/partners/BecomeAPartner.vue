<template>
	<div class="section grey noClip">
		<div class="container">
			<!--<h2 class="center"><I18N id="page.partnerships.becomeAPartner.title" /></h2>-->
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap>
					<v-flex v-for="(type, i) in becomeAPartnerTypes" :key="i" sm12 md4>
						<v-card dark color="secondary">
							<v-card-text class="px-0">
								<h2><I18N :id="`page.partnerships.becomeAPartner.${type}`" /></h2>
							</v-card-text>
							<v-card-actions class="center">
								<div class="buttonCenter">
									<Button
											colour="transparent blueBorder"
											textClass="blue"
											icon="arrow-right-blue"
									>
										<I18N id="page.partnerships.becomeAPartner.join" />
									</Button>
								</div>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>

<script>
	import Items from '@/views/pages/partners/Items';
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button,
			Items
		},
		data()
		{
			return {
				becomeAPartnerTypes: ['sidechain', 'modules', 'collaborator']
			};
		}
	};
</script>

<style scoped>
	.card {
		background: #fff;
		box-shadow: 0 8px 24px 0 rgba(186, 194, 198, 0.5), 0 3px 6px 0 rgba(186, 194, 198, 0.2);
		border-radius: 6px;
		height: 100% !important;
		padding-bottom: 25px;
	}

	.buttonCenter {
		width: 100%;
	}
</style>
