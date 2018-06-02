<template>
	<div class="container">
		<v-flex xs6>
			<v-subheader>
				<I18N id="dialog.switchLanguage.chooseYourLanguage" />
			</v-subheader>
		</v-flex>
		<v-flex xs6>
			<v-select
					:items="getLanguages"
					v-model="locale"
					single-line
					hide-details
			/>
		</v-flex>
		<p>
			<I18N id="dialog.switchLanguage.help.body">
				<router-link place="contactUs" :to="{ name: 'home' }"><I18N id="dialog.switchLanguage.help.contactUs" /></router-link>
			</I18N>
		</p>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				locale: this.$store.getters['i18n/locale'],
				languages: [
					'en',
					'fr'
				]
			};
		},
		computed: {
			getLanguages()
			{
				return this.languages.map((iso) => ({
					value: iso,
					text: this.i18n(`languages.${iso}`)
				}));
			}
		},
		methods: {
			i18n(key)
			{
				return this.$t(key);
			}
		},
		watch: {
			locale: function (iso)
			{
				this.$store.dispatch('i18n/changeLocale', iso);
			}
		}
	};
</script>
