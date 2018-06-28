<template>
	<div class="section container">
		<div class="centered">
			<v-form v-model="valid">
				<v-text-field
					v-model="name"
					:rules="nameRules"
					:label="`${$t('page.contact.form.name')}`"
					required
				/>
				<v-text-field
					v-model="email"
					:rules="emailRules"
					:label="`${$t('page.contact.form.email')}`"
					required
				/>
				<v-text-field
					v-model="message"
					:rules="messageRules"
					:label="`${$t('page.contact.form.message')}`"
					multi-line
					required
				/>
				<Button class="contactUs" :onClick="submit"><I18N id="page.contact.form.submit" /></Button>
			</v-form>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		},
		data()
		{
			return {
				name: '',
				email: '',
				message: '',
				nameRules: [
					v => !!v || 'Name is required',
					v => v.length <= 10 || 'Name must be less than 20 characters'
				],
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
				],
				messageRules: [
					v => !!v || 'Message is required'
				],
				valid: false
			}
		},
		methods: {
			submit()
			{
				if(!this.valid) return;

				console.log(this.name);
				console.log(this.email);
				console.log(this.message);
			}
		}
	}
</script>

<style scoped>
	.centered {
		padding: 0;
	}
</style>
