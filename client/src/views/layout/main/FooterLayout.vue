<template>
	<div>
		<v-footer
			app
			inset
			absolute
		>
			<div>
				<span class="white--text">
					&copy; 2018 -
					<router-link :to="{ name: 'legal.terms' }"><I18N id="footer.termsConditions" /></router-link> -
					<router-link :to="{ name: 'legal.privacy' }"><I18N id="footer.privacyCookiesPolicy" /></router-link>
				</span>
			</div>
		</v-footer>
	</div>
</template>

<style scoped>
	footer div {
		margin: 0 10px;
	}
</style>
