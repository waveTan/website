<template>
	<div class="section container">
		<div class="centered">
			<v-progress-circular v-if="pageLoading" :size="50" indeterminate color="primary" />
			<Panels v-else>
				<Panel v-for="(job, i) in jobs" :key="i">
					<template slot="header">
						<h4>{{ job.title }}</h4>
						<span class="readMore"><I18N id="page.jobs.readMore" /></span>
					</template>
					<div v-html="compiledMarkdown(job.description)" />
					<div slot="footer" class="footer">
						<I18N id="page.jobs.sendResume" />: <a class="email green" :href="`mailto:${job.contactEmailAddress}`">{{ job.contactEmailAddress }}</a>
					</div>
				</Panel>
			</Panels>
		</div>
	</div>
</template>

<script>
	import marked from 'marked';
	import Panels from '@/components/vuetify/ExpansionPanels';
	import Panel from '@/components/vuetify/ExpansionPanel';

	export default {
		components: {
			Panels,
			Panel
		},
		computed: {
			jobs()
			{
				if(!this.$store.getters['genericEndPoints/getItems']('jobs'))
				{
					this.$store.dispatch('genericEndPoints/loadItems', 'jobs');
				}

				return this.$store.getters['genericEndPoints/getItems']('jobs');
			},
			pageLoading()
			{
				return this.$store.getters['app/pageLoading'];
			}
		},
		methods: {
			compiledMarkdown(markdown)
			{
				return marked(markdown, { sanitize: true })
			}
		}
	}
</script>

<style scoped>
	.section {
		padding-top: 40px;
	}

	.email {
		margin-left: 5px;
	}

	.footer {
		font-size: 18px;
	}

	.centered {
		padding: 0;
	}
</style>
