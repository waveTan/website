<template>
	<div class="containerParent">
		<div :class="{ closed: closed }" class="mobile navigation">
			<div class="logo" />
			<div class="close" @click="toggleMobileNavigation" />
			<div>
				<ul class="navLinks">
					<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
					<li><router-link :to="{ name: 'wallet' }"><I18N id="header.navigation.wallet" /></router-link></li>
					<!--<li><router-link :to="{ name: 'dApps' }"><I18N id="header.navigation.dApps" /></router-link></li>-->
					<!--<li><a href="#"><I18N id="header.navigation.documents" /></a></li>-->
					<li><a href="http://explorer.nuls.io" target="_blank"><I18N id="header.navigation.blockchainExplorer" /></a></li>
					<li><a href="https://swap.nuls.io/swap.html" target="_blank"><I18N id="header.navigation.token" /></a></li>
					<li>
						<Dropdown
								:useButton="false"
								:items="[
										{ title: 'header.navigation.whatIsNuls', link: 'about' },
										{ title: 'header.navigation.team', link: 'team' },
										{ title: 'header.navigation.partners', link: 'partners' },
										{ title: 'header.navigation.joinUs', link: 'jobs' },
										{ title: 'header.navigation.news', link: 'news' }
									]"
								title="header.navigation.about"
								class="dropdownPadding"
						/>
					</li>
					<!--<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.forum" /></router-link></li>-->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Dropdown from '@/components/vuetify/Dropdown';

	export default {
		components: {
			Dropdown
		},
		computed: {
			closed()
			{
				return !this.$store.getters['app/navigationMenuOpen'];
			}
		},
		methods: {
			toggleMobileNavigation()
			{
				this.$store.dispatch('app/toggleNavigationMenu');
			}
		}
	}
</script>

<style scoped>
	.close {
		float: right;
		background: url('~@/assets/images/icons/close.png') no-repeat center;
		width: 21px;
		height: 22px;
		padding: 37px;
	}

	.dropdownPadding {
		padding: 15px;
	}

	.containerParent {
		font-family: SofiaProLight, sans-serif;
		font-size: 18px;
		color: #fff;
		letter-spacing: 0.24px;
		position: inherit;
		top: 0;
		left: 0;
		width: 100%;
	}

	.logo {
		margin: 20px;
		background: url('~@/assets/images/nuls-logo-white.png') no-repeat;
		float: left;
		width: 135px;
		height: 53px;
	}

	.navigation {
		z-index: 5;
		position: absolute;
		top: 0;
		left: 0;
		background: #0a2140;
		width: 100%;
		font-size: 20px;
		overflow-y: hidden;
		max-height: 500px;
		transition-property: all;
		transition-duration: 1s;
		transition-timing-function: ease;
	}

	.navigation.closed {
		max-height: 0;
	}

	ul {
		margin: 90px 0 50px 0;
	}

	li {
		text-align: center;
	}

	a {
		color: #fff;
		display: block;
		padding: 15px;
	}
</style>
