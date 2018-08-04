<template>
	<div class="section container">
		<div class="centered">
			<v-progress-circular v-if="pageLoading" :size="50" indeterminate color="primary" />
			<Panels v-else>
				<p v-if="!jobs">
					<I18N id="page.jobs.noJobs" />
				</p>
				<Panel
					v-for="(job, i) in jobs"
					v-else
					:key="i"
				>
					<template slot="header">
						<div class="jobTitleMeta">
							<div class="title"><h4>{{ job.title }}</h4></div>
							<div class="readMore"><span class="readMore"><I18N id="page.jobs.readMore" /></span></div>
						</div>
					</template>
					<div v-html="compiledMarkdown(job.content)" />
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
				if(!this.$store.getters['items/getItems']('jobs'))
				{
					this.$store.dispatch('items/loadItems', 'jobs');
				}

				const jobs = this.$store.getters['items/getItems']('jobs');

				return Array.isArray(jobs) && jobs.length !== 0 ? jobs : false;
			},
			pageLoading()
			{
				return this.$store.getters['app/pageLoading'];
			}
		},
		methods: {
			compiledMarkdown(markdown)
			{
				return marked(markdown, { sanitize: true });
			}
		}
	};
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

	.jobTitleMeta {
		display: -webkit-flex;
		display: flex;
		width: 100%;
	}

	.jobTitleMeta .title {
		flex: 5;
	}

	.jobTitleMeta .readMore {
		flex: 1;
		text-align: right;
	}
</style>
