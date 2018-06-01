<template>
    <v-app
            dark
            id="inspire"
    >
        <v-progress-linear v-if="loadingStack > 0" :indeterminate="true"></v-progress-linear>
        <div v-if="Object.keys(appLoaded).length !== 0 && percentageLoader !== 100">
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
            <v-navigation-drawer
                    fixed
                    clipped
                    v-model="drawer"
                    app
            >
                <v-list dense>
                    <v-list-tile v-for="item in items" :key="item.text" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
                    <v-list>
                        <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
                            <v-list-tile-avatar>
                                <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
                            </v-list-tile-avatar>
                            <v-list-tile-title v-text="item.text"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    <v-list-tile class="mt-3" @click="">
                        <v-list-tile-action>
                            <v-icon color="grey darken-1">add_circle_outline</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="grey darken-1">settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar
                    color="red"
                    dense
                    fixed
                    clipped-left
                    app
            >
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-icon class="mx-3">fab fa-youtube</v-icon>
                <v-toolbar-title class="mr-5 align-center">
                    <span class="title">Youtube</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-layout row align-center style="max-width: 650px">
                    <v-text-field
                            placeholder="Search..."
                            single-line
                            append-icon="search"
                            :append-icon-cb="() => {}"
                            color="white"
                            hide-details
                    ></v-text-field>
                </v-layout>
            </v-toolbar>
            <v-content>
                <v-container fill-height>
                    <v-layout justify-center align-center>
                        <v-flex shrink>
                            <router-view></router-view>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
            <v-footer app inset>
                <span class="white--text">&copy; 2017</span>
            </v-footer>
        </div>
    </v-app>
</template>

<script>
	export default {
		data: () => ({
			drawer: true,
			items: [
				{ icon: 'trending_up', text: 'Most Popular' },
				{ icon: 'subscriptions', text: 'Subscriptions' },
				{ icon: 'history', text: 'History' },
				{ icon: 'featured_play_list', text: 'Playlists' },
				{ icon: 'watch_later', text: 'Watch Later' }
			],
			items2: [
				{ picture: 28, text: 'Joseph' },
				{ picture: 38, text: 'Apple' },
				{ picture: 48, text: 'Xbox Ahoy' },
				{ picture: 58, text: 'Nokia' },
				{ picture: 78, text: 'MKBHD' }
			]
		}),
		props: {
			source: String
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
		}
	}
</script>

<style scoped>
    .progress-linear {
        margin: 0.5px;
        opacity: 0.4;
        float: left;
    }
</style>
