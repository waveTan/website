<template>
	<div>
		<HeaderMeta title="legal.privacy.title" />
		<h1><I18N id="legal.privacy.title" /></h1>
		<SimpleExpansionPanels>
			<SimpleExpansionPanel title="legal.privacy.title">
				<p><I18N id="privacy.terms.introduction" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.whatInformation.title">
				<p><I18N id="legal.privacy.whatInformation.p1" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.collect.title">
				<p><I18N id="legal.privacy.collect.p1" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.howUse.title">
				<p><I18N id="legal.privacy.howUse.p1" /></p>
				<p><I18N id="legal.privacy.howUse.p2" /></p>
				<ol>
					<li><I18N id="legal.privacy.howUse.li1" /></li>
					<li><I18N id="legal.privacy.howUse.li2" /></li>
					<li><I18N id="legal.privacy.howUse.li3" /></li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.protect.title">
				<p><I18N id="legal.privacy.protect.p1" /></p>
				<p><I18N id="legal.privacy.protect.p2" /></p>
				<p><I18N id="legal.privacy.protect.p3" /></p>
				<p><I18N id="legal.privacy.protect.p4" /></p>
				<p><I18N id="legal.privacy.protect.p5" /></p>
				<p><I18N id="legal.privacy.protect.p6" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.cookies.title">
				<p><I18N id="legal.privacy.cookies.p1" /></p>
				<p><I18N id="legal.privacy.cookies.p2" /></p>
				<p><I18N id="legal.privacy.cookies.p3" /></p>
				<p><I18N id="legal.privacy.cookies.p4" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.localeStorage.title">
				<p><I18N id="legal.privacy.localeStorage.p1" /></p>
				<p><I18N id="legal.privacy.localeStorage.p2" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.thirdParty.title">
				<p><I18N id="legal.privacy.thirdParty.p1" /></p>
				<p><I18N id="legal.privacy.thirdParty.p2" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.google.title">
				<p><I18N id="legal.privacy.google.p1" /></p>
				<p><I18N id="legal.privacy.google.p2" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.caloppa.title">
				<p><I18N id="legal.privacy.caloppa.p1" /></p>
				<p><I18N id="legal.privacy.caloppa.p2" /></p>
				<p><I18N id="legal.privacy.caloppa.p3" /></p>
				<p><I18N id="legal.privacy.caloppa.p4" /></p>
				<p><I18N id="legal.privacy.caloppa.p5" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.doNotTrack.title">
				<p><I18N id="legal.privacy.doNotTrack.p1" /></p>
				<p><I18N id="legal.privacy.doNotTrack.p2" /></p>
				<p><I18N id="legal.privacy.doNotTrack.p3" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.thirdPartyTracking.title">
				<p><I18N id="legal.privacy.thirdPartyTracking.p1" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.coppa.title">
				<p><I18N id="legal.privacy.coppa.p1" /></p>
				<p><I18N id="legal.privacy.coppa.p2" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.fairInformation.title">
				<p><I18N id="legal.privacy.fairInformation.p1" /></p>
				<p><I18N id="legal.privacy.fairInformation.p2" /></p>
				<p><I18N id="legal.privacy.fairInformation.p3" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.canSpam.title">
				<p><I18N id="legal.privacy.canSpam.p1" /></p>
				<p><I18N id="legal.privacy.canSpam.p2" /></p>
				<p><I18N id="legal.privacy.canSpam.p3" /></p>
				<ol>
					<li><I18N id="legal.privacy.canSpam.p3li1" /></li>
					<li><I18N id="legal.privacy.canSpam.p3li2" /></li>
					<li><I18N id="legal.privacy.canSpam.p3li3" /></li>
					<li><I18N id="legal.privacy.canSpam.p3li4" /></li>
					<li><I18N id="legal.privacy.canSpam.p3li5" /></li>
					<li><I18N id="legal.privacy.canSpam.p3li6" /></li>
				</ol>
				<p><I18N id="legal.privacy.canSpam.p4" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.privacy.contact.title">
				<p><I18N id="legal.privacy.contact.p1" :vars="{ emailAddress }" /></p>
				<p><I18N id="legal.privacy.contact.p2" /></p>
			</SimpleExpansionPanel>
		</SimpleExpansionPanels>
	</div>
</template>

<script>
	export default {
		components: {
			SimpleExpansionPanel: () => import(/* webpackChunkName:"vuetify" */ '@/components/vuetify/SimpleExpansionPanel'),
			SimpleExpansionPanels: () => import(/* webpackChunkName:"vuetify" */ '@/components/vuetify/SimpleExpansionPanels')
		},
		data()
		{
			return {
				emailAddress: 'hello@example.com'
			};
		}
	};
</script>
