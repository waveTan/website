<template>
	<div>
		<template v-for="(item, i) in items">
			<v-list-group
					v-if="item.children"
					v-model="item.model"
					:key="i"
			>
				<v-list-tile slot="activator">
					<v-list-tile-action>
						<FontAwesomeIcon :icon="item.icon" />
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>
							<I18N :id="`header.sidebar.${item.title}`" />
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile
						v-for="(child, i) in item.children"
						:key="i"
						@click="navigate(child.path)"
				>
					<v-list-tile-action>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>
							<I18N :id="`header.sidebar.${child.title}`" />
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list-group>
			<v-list-tile v-else @click="navigate(item.path)" :key="i">
				<v-list-tile-action>
					<FontAwesomeIcon :icon="item.icon" />
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title>
						<I18N :id="`header.sidebar.${item.title}`" />
					</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</template>
	</div>
</template>

<script>
	export default {
		data: () => ({
			items: [
				{
					icon: ['fas', 'home'],
					title: 'home',
					path: 'home'
				},
				// {
				// 	icon: ['fas', 'newspaper'],
				// 	title: 'news',
				// 	path: 'home'
				// },
				// {
				// 	icon: ['fas', 'cubes'],
				// 	title: 'explorer',
				// 	path: 'home'
				// },
				// {
				// 	icon: ['far', 'calendar-alt'],
				// 	title: 'calendar',
				// 	path: 'calendar'
				// },
				// {
				// 	icon: ['fab', 'linode'],
				// 	title: 'nodes.title',
				// 	path: 'nodes',
				// 	children: [
				// 		// {
				// 		// 	title: 'agents',
				// 		// 	path: 'nodes'
				// 		// },
				// 		{
				// 			title: 'nodes.information',
				// 			path: 'nodes.information'
				// 		},
				// 		{
				// 			title: 'nodes.calculator',
				// 			path: 'nodes.calculator'
				// 		}
				// 	]
				// },
				// {
				// 	icon: ['far', 'money-bill-alt'],
				// 	title: 'wallet',
				// 	path: 'wallet'
				// },
				// {
				// 	icon: ['fas', 'book'],
				// 	title: 'modules',
				// 	path: 'home'
				// },
				// {
				// 	icon: ['fas', 'list-ol'],
				// 	title: 'voting',
				// 	path: 'home'
				// },
				// {
				// 	icon: ['fas', 'users'],
				// 	title: 'pools',
				// 	path: 'home'
				// },
				// {
				// 	icon: ['fas', 'comments'],
				// 	title: 'forum',
				// 	path: 'home'
				// }
			]
		}),
		methods: {
			navigate(path)
			{
				this.$router.push({ name: path });
			}
		}
	};
</script>
