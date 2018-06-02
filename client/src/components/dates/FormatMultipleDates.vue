<template>
	<div :class="{ blockDate: styleType === 'block', inlineDate: styleType === 'inline' }">
		<div v-if="startTime && twoMonths" class="multiDates">
			<div class="multiDate">
				<span class="day"><FormatDate :timestamp="startTime" format="DD" /></span>
				<span class="month"><FormatDate :timestamp="startTime" format="MMM" /></span>
				<div v-if="showYear && twoYears" class="year">
					<FormatDate :timestamp="endTime" format="YYYY" />
				</div>
			</div>
			<div class="multiDate">-</div>
			<div class="multiDate">
				<span class="day"><FormatDate :timestamp="endTime" format="DD" /></span>
				<span class="month"><FormatDate :timestamp="endTime" format="MMM" /></span>
				<div v-if="showYear && twoYears" class="year">
					<FormatDate :timestamp="endTime" format="YYYY" />
				</div>
			</div>
			<div v-if="showYear && !twoYears" class="year">
				<FormatDate :timestamp="endTime" format="YYYY" />
			</div>
		</div>
		<div v-else>
			<div v-if="startTime">
				<span class="day"><FormatDate :timestamp="startTime" format="DD" /> - <FormatDate :timestamp="endTime" format="DD" /></span>
				<span class="month"><FormatDate :timestamp="endTime" format="MMM" /></span>
			</div>
			<div v-else>
				<span class="day"><FormatDate :timestamp="endTime" format="DD" /></span>
				<span class="month"><FormatDate :timestamp="endTime" format="MMM" /></span>
			</div>
			<div v-if="showYear" class="year">
				<FormatDate :timestamp="endTime" format="YYYY" />
			</div>
		</div>
	</div>
</template>

<script>
	import FormatDate from '@/components/dates/FormatDate';

	export default {
		components: {
			FormatDate
		},
		props: {
			startTime: {
				type: [String, Number],
				required: true
			},
			endTime: {
				type: [String, Number],
				required: true
			},
			showYear: {
				type: Boolean,
				default: false
			},
			styleType: {
				type: String,
				default: 'inline'
			}
		},
		data() {
			return {
				twoMonths: this.getMonth(this.startTime) !== this.getMonth(this.endTime),
				twoYears: this.getYear(this.startTime) !== this.getYear(this.endTime)
			};
		},
		methods: {
			getMonth(timestamp)
			{
				return new Date(timestamp * 1000).getMonth();
			},
			getYear(timestamp)
			{
				return new Date(timestamp * 1000).getFullYear();
			}
		}
	};
</script>

<style scoped>
	.blockDate .multiDates {
		display: table;
	}

	.blockDate .day,
	.blockDate .month {
		display: block;
	}

	.blockDate .multiDates .multiDate {
		vertical-align: middle;
		display: table-cell;
		padding: 5px;
	}

	.inlineDate div,
	.inlineDate span {
		display: inline-block;
	}
</style>
