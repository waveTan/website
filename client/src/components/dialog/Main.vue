<template>
	<v-dialog :value="dialogOpen" v-model="dialog" max-width="50%">
		<v-card v-if="payload.id !== null">
			<v-card-title class="subheader">
				<I18N :id="`dialog.${payload.id}.title`" />
			</v-card-title>
			<v-card-text>
				<v-container fluid>
					<v-layout row wrap>
						<component :is="payload.id" class="dialogComponent" />
					</v-layout>
				</v-container>
			</v-card-text>
			<v-card-actions class="footer">
				<v-btn color="primary" flat @click="close">
					<I18N id="dialog.close" />
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		data()
		{
			return {
				dialog: this.getDialog()
			};
		},
		methods: {
			close()
			{
				this.$store.dispatch('app/updateDialog', { active: false });
			},
			getDialog()
			{
				return this.$store.getters['app/dialog'].active;
			}
		},
		computed: {
			dialogOpen()
			{
				this.dialog = this.getDialog();
			},
			payload()
			{
				return this.$store.getters['app/dialog'];
			}
		},
		components: {
			switchLanguage: () => import(/* webpackChunkName:"dialog" */ '@/components/dialog/SwitchLanguage')
		}
	};
</script>

<style>
	.dialogComponent.container {
		display: contents;
		width: 100%;
		margin: 0;
	}

	.dialog {
		overflow-x: hidden;
	}
</style>
