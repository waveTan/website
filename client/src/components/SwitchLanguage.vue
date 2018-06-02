<template>
	<div>
		<p>
			<I18N id="welcome" />
		</p>
		<p>
			<I18N id="goodbye" />
		</p>
		<p>
			<I18N id="greeting" :vars="{name: 'Josh'}" />
		</p>

		<v-btn color="info" @click="$store.dispatch('i18n/changeLocale', 'en')">English</v-btn>
		<v-btn color="info" @click="$store.dispatch('i18n/changeLocale', 'fr')">French</v-btn>
	</div>
</template>

