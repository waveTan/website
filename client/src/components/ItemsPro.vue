<template>
	<div class="section container">
		<v-text-field
				class="searchInput"
				v-model="searchQuery"
				append-icon="search"
				:label="`${$t(searchTextKey)}`"
				@input="inputUpdated"
		/>
		<div v-if="loading" class="center">
			<v-progress-circular :size="50" indeterminate color="primary" />
		</div>
		<div v-else>
			<v-container grid-list-md text-xs-center :class="`{$itemType}Items`">
				<v-layout row wrap>
					<v-flex v-for="(item, i) in getItems" :key="i" :sm12="sm12" :sm6="sm6" :md3="md3">
						<v-card flat tile>
							<slot :item="item" :imageDirectory="imageDirectory" />
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
			<div class="text-xs-center">
				<v-pagination
					:length="totalPages"
					v-model="page"
					:total-visible="7"
					@input="pageUpdated"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import ItemsPro from '@/components/mixins/ItemsPro';

	export default {
		props: {
			itemType: {
				type: String,
				required: true
			},
			sm12: {
				type: Boolean,
				default: false
			},
			sm6: {
				type: Boolean,
				default: false
			},
			md3: {
				type: Boolean,
				default: false
			}
		},
		mixins: [ItemsPro],
		computed: {
			searchTextKey()
			{
				return `page.${this.itemType}.items.search`;
			}
		}
	}
</script>
