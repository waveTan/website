<template>
	<div class="section container">
		<div class="centered">
			<Panels>
				<Panel v-for="(job, i) in jobs" :key="i">
					<template slot="header">
						<h4>{{ job.title }}</h4>
						<span class="readMore"><I18N id="page.jobs.readMore" /></span>
					</template>
					<div v-html="job.description" />
					<div slot="footer" class="footer">
						<I18N id="page.jobs.sendResume" />: <a class="email green" :href="`mailto:${job.contactEmailAddress}`">{{ job.contactEmailAddress }}</a>
					</div>
				</Panel>
			</Panels>
		</div>
	</div>
</template>

<script>
	import Panels from '@/components/vuetify/ExpansionPanels';
	import Panel from '@/components/vuetify/ExpansionPanel';

	export default {
		components: {
			Panels,
			Panel
		},
		async mounted()
		{
			await this.$store.dispatch('genericEndPoints/loadItems', 'jobs');
		},
		data()
		{
			return {
				jobs: this.$store.getters['genericEndPoints/getItems']('jobs'),
			};
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
