<template>
	<v-app
			dark
			id="inspire"
	>
		<v-progress-linear v-if="loadingStack > 0" :indeterminate="true"></v-progress-linear>
		<div v-if="Object.keys(appLoaded).length !== 0">
			<v-content>
				<v-container fill-height>
					<v-layout justify-center align-center>
						<v-flex shrink>
							<v-progress-circular
									:size="100"
									:width="15"
									:rotate="-90"
									:value="percentageLoader"
									color="primary"
							>
								{{percentageLoader}}%
							</v-progress-circular>
						</v-flex>
					</v-layout>
				</v-container>
			</v-content>
		</div>
		<div v-else>
			<Dialog />
			<v-navigation-drawer
					fixed
					clipped
					v-model="drawer"
					app
			>
				<v-list dense>
					<Sidebar />
					<SidebarSub />
				</v-list>
			</v-navigation-drawer>
			<v-toolbar
					color="red"
					dense
					fixed
					clipped-left
					app
			>
				<v-toolbar-side-icon @click="updateDrawer"></v-toolbar-side-icon>
				<HeaderLayout />
			</v-toolbar>
			<v-content>
				<v-container fill-height>
					<v-layout justify-center align-center>
						<v-flex>
							<router-view></router-view>
						</v-flex>
					</v-layout>
				</v-container>
			</v-content>
			<FooterLayout />
		</div>
	</v-app>
</template>

<script>
	import Sidebar from '@/views/layout/main/Sidebar';
	import SidebarSub from '@/views/layout/main/SidebarSub';
	import HeaderLayout from '@/views/layout/main/HeaderLayout';
	import FooterLayout from '@/views/layout/main/FooterLayout';
	import Dialog from '@/components/dialog/Main';

	export default {
		data()
		{
			return {
				drawer: this.getDrawer()
			};
		},
		methods: {
			getDrawer()
			{
				return this.$store.getters['app/drawer'];
			},
			updateDrawer()
			{
				this.drawer = !this.drawer;
			}
		},
		computed: {
			loadingStack()
			{
				return this.$store.getters['app/loadingStack'].length;
			},
			appLoaded()
			{
				return this.$store.getters['app/appLoaded'];
			},
			percentageLoader()
			{
				if(this.loadingStack === 0) return 100;

				return ((this.loadingStack - Object.keys(this.appLoaded).length) * 100) / Object.keys(this.appLoaded).length;
			}
		},
		watch: {
			drawer: function(value)
			{
				this.$store.dispatch('app/updateDrawer', value);
			}
		},
		components: {
			Sidebar,
			SidebarSub,
			HeaderLayout,
			FooterLayout,
			Dialog
		}
	};
</script>

<style>
	.progress-linear {
		margin: 0.5px;
		opacity: 0.4;
		float: left;
	}

	.svg-inline--fa {
		font-size: 30px;
	}

	ul,
	ol {
		margin: 15px;
	}
</style>
