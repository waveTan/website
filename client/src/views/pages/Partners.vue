<template>
	<div>
		<div class="header">
			<div class="container">
				<h1><I18N id="page.partnerships.header.title" /></h1>
				<p class="centered"><I18N id="page.partnerships.header.meta" /></p>
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.cooperationProjects" /></h2>
				<Items :items="getItems('cooperation projects')" />
			</div>
		</div>
		<div class="section grey">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.cooperationMedia" /></h2>
				<Items :items="getItems('cooperation media')" :container="true" />
			</div>
		</div>
		<div class="section">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.platforms" /></h2>
				<Items :items="getItems('platform')" />
			</div>
		</div>
		<div class="section grey noClip">
			<div class="container">
				<h2 class="center"><I18N id="page.partnerships.becomeAPartner.title" /></h2>
				<v-container grid-list-md text-xs-center>
					<v-layout row wrap>
						<v-flex v-for="(type) in becomeAPartnerTypes" sm12 md4>
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
		async mounted()
		{
			await this.$store.dispatch('strapi/loadItems', 'nulsPartners');
		},
		data()
		{
			return {
				partnerships: this.$store.getters['strapi/getItems']('nulsPartners'),
				becomeAPartnerTypes: ['sidechain', 'modules', 'collaborator']
			};
		},
		methods: {
			getItems(type)
			{
				if(!this.partnerships) return [];

				return this.partnerships.filter((item) => item.type.toLowerCase() === type);
			}
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
