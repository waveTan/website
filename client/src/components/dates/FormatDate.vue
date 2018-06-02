<template>
	<span>{{ date }}</span>
</template>

<script>
	import moment from 'moment';

	export default {
		props: {
			timestamp: {
				type: [String, Number],
				required: true
			},
			format: {
				type: String,
				required: true
			}
		},
		computed: {
			date()
			{
				return this.formatDate(this.timestamp, this.format);
			}
		},
		methods: {
			formatDate(timestamp, format)
			{
				moment.updateLocale(this.$store.getters['i18n/locale'], {
					months: this.$t('dates.months.long'),
					monthsShort: this.$t('dates.months.short')
				});

				return moment.unix(timestamp).format(format);
			}
		}
	}
</script>
