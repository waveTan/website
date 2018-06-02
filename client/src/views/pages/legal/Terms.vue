<template>
	<div>
		<HeaderMeta title="legal.terms.title" />
		<h1><I18N id="legal.terms.title" /></h1>
		<SimpleExpansionPanels>
			<SimpleExpansionPanel title="legal.terms.introduction.title">
				<p><I18N id="legal.terms.introduction.p1" :vars="{ name }" /></p>
				<p><I18N id="legal.terms.introduction.p2" :vars="{ name }" /></p>
				<p><I18N id="legal.terms.introduction.p3" /></p>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.acceptableUse.title">
				<ol class="clauses firstList">
					<li><I18N id="legal.terms.acceptableUse.li1" :vars="{ name }" /></li>
					<li><I18N id="legal.terms.acceptableUse.li2" />
						<ol>
							<li><I18N id="legal.terms.acceptableUse.li2ol1" /></li>
						</ol>
					</li>
					<li><I18N id="legal.terms.acceptableUse.li3" :vars="{ name }" /></li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.prohibited.title">
				<ol class="clauses">
					<li><I18N id="legal.terms.prohibited.li1" />
						<ol>
							<li><I18N id="legal.terms.prohibited.li1ol1" /></li>
							<li><I18N id="legal.terms.prohibited.li1ol2" /></li>
							<li><I18N id="legal.terms.prohibited.li1ol3" /></li>
						</ol>
					</li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.links.title">
				<ol class="clauses">
					<li><I18N id="legal.terms.links.li1" :vars="{ name }" /></li>
					<li><I18N id="legal.terms.links.li2" /></li>
					<li><I18N id="legal.terms.links.li3" /></li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.privacyCookies.title">
				<ol class="clauses">
					<li>
						<I18N id="legal.terms.privacyCookies.li1.body">
							<router-link place="nodesInformationPage" :to="{ name: 'legal.privacy' }">
								<I18N id="legal.terms.privacyCookies.li1.privacyAndCookiesPolicy" />
							</router-link>
						</I18N>
					</li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.availability.title">
				<ol class="clauses">
					<li><I18N id="legal.terms.availability.li1" :vars="{ name }" /></li>
					<li><I18N id="legal.terms.availability.li2" :vars="{ name }" /></li>
					<li><I18N id="legal.terms.availability.li3" :vars="{ name }" /></li>
					<li><I18N id="legal.terms.availability.li4" :vars="{ name }" /></li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.limitation.title">
				<ol class="clauses">
					<li><I18N id="legal.terms.limitation.li1" /></li>
					<li><I18N id="legal.terms.limitation.li2" /></li>
					<li><I18N id="legal.terms.limitation.li3" />
						<ol>
							<li><I18N id="legal.terms.limitation.li3ol1" /></li>
							<li><I18N id="legal.terms.limitation.li3ol2" /></li>
							<li><I18N id="legal.terms.limitation.li3ol3" :vars="{ name }" /></li>
						</ol>
					</li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.general.title">
				<ol class="clauses">
					<li><I18N id="legal.terms.general.li1" /></li>
					<li><I18N id="legal.terms.general.li2" /></li>
					<li><I18N id="legal.terms.general.li3" /></li>
					<li><I18N id="legal.terms.general.li4" /></li>
					<li><I18N id="legal.terms.general.li5" /></li>
					<li><I18N id="legal.terms.general.li6" /></li>
					<li><I18N id="legal.terms.general.li7" /></li>
				</ol>
			</SimpleExpansionPanel>
			<SimpleExpansionPanel title="legal.terms.details.title" :titleVars="{ name }">
				<ol class="clauses">
					<li><I18N id="legal.terms.details.li1" :vars="{ name, websiteUrl }" />
						<p><I18N id="legal.terms.details.li1p1" :vars="{ name, emailAddress }" /></p>
					</li>
				</ol>
			</SimpleExpansionPanel>
		</SimpleExpansionPanels>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				name: 'Josh Welham',
				websiteUrl: 'http://www.example.com',
				emailAddress: 'hello@example.com'
			}
		},
		components: {
			SimpleExpansionPanel: () => import(/* webpackChunkName:"vuetify" */ '@/components/vuetify/SimpleExpansionPanel'),
			SimpleExpansionPanels: () => import(/* webpackChunkName:"vuetify" */ '@/components/vuetify/SimpleExpansionPanels')
		}
	};
</script>
