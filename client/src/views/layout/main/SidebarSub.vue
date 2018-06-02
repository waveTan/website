<template>
	<div>
		<v-list-tile v-for="(item, i) in items" :key="item.text" :class="i === 0 ? 'mt-3' : ''" @click="item.path && handleClick(item.path) || null">
			<v-list-tile-action>
				<FontAwesomeIcon :icon="item.icon" />
			</v-list-tile-action>
			<v-list-tile-title class="grey--text text--darken-1">
				<I18N :id="`header.subSidebar.${item.title}`" />
			</v-list-tile-title>
		</v-list-tile>
	</div>
</template>

<script>
	export default {
		methods: {
			switchLanguage()
			{
				this.$store.dispatch('app/updateDialog', { active: true, id: 'switchLanguage' });
			},
			handleClick(path)
			{
				if(typeof path === 'string')
				{
					return this.navigate(path);
				}
				else if(typeof path === 'function')
				{
					return path();
				}
			},
			navigate(path)
			{
				this.$router.push({ name: path });
			}
		},
		computed: {
			items()
			{
				return [
					// { icon: ['fas', 'cog'], title: 'settings', path: 'home' },
					{ icon: ['fas', 'globe'], title: 'language', path: this.switchLanguage }
				];
			}
		}
	};
</script>

<style scoped>
	.svg-inline--fa {
		color: #757575;
	}
</style>
