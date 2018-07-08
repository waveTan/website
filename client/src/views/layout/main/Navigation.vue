<template>
	<div :class="{ whiteBackground: whiteBackground }" class="containerParent">
		<div class="container">
			<!--<SwitchLanguage />-->
			<div class="logo" />
			<div class="desktop">
				<div class="navigation">
					<ul>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.wallet" /></router-link></li>
						<li><router-link :to="{ name: 'dApps' }"><I18N id="header.navigation.dApps" /></router-link></li>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.documents" /></router-link></li>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.blockchainExplorer" /></router-link></li>
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
								:arrow="whiteBackground ? '-black' : ''"
							/>
						</li>
						<!--<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.forum" /></router-link></li>-->
					</ul>
				</div>
			</div>
			<div class="laptop">
				<div class="navigation">
					<ul>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.wallet" /></router-link></li>
						<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.blockchainExplorer" /></router-link></li>
						<li>
							<Dropdown
								:useButton="false"
								:items="[
									{ title: 'header.navigation.dApps', link: 'dApps' },
									{ title: 'header.navigation.documents', link: 'home' },
									{ title: 'header.navigation.whatIsNuls', link: 'about' },
									{ title: 'header.navigation.team', link: 'team' },
									{ title: 'header.navigation.partners', link: 'partners' },
									{ title: 'header.navigation.joinUs', link: 'jobs' },
									{ title: 'header.navigation.news', link: 'news' }
								]"
								title="header.navigation.more"
							/>
						</li>
					</ul>
				</div>
			</div>
			<div class="mobile">
				<div class="hamburger" @click="toggleMobileNavigation" />
				<div :class="{ closed: !mobileNavigation }" class="navigation">
					<div class="logo" />
					<div class="close" @click="toggleMobileNavigation" />
					<div>
						<ul>
							<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.home" /></router-link></li>
							<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.wallet" /></router-link></li>
							<li><router-link :to="{ name: 'dApps' }"><I18N id="header.navigation.dApps" /></router-link></li>
							<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.documents" /></router-link></li>
							<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.blockchainExplorer" /></router-link></li>
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
								/>
							</li>
							<!--<li><router-link :to="{ name: 'home' }"><I18N id="header.navigation.forum" /></router-link></li>-->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<slot />
	</div>
</template>

<script>
	import SwitchLanguage from '@/components/SwitchLanguage';
	import Dropdown from '@/components/vuetify/Dropdown';

	export default {
		components: {
			Dropdown,
			SwitchLanguage
		},
		props: {
			whiteBackground: {
				type: Boolean,
				default: false
			}
		},
		data: () => ({
			mobileNavigation: false
		}),
		destroyed()
		{
			document.documentElement.removeEventListener('click', this.clickAway, false);
		},
		methods: {
			toggleMobileNavigation()
			{
				this.mobileNavigation = !this.mobileNavigation;

				if(this.mobileNavigation)
				{
					this.$nextTick(() => document.documentElement.addEventListener('click', this.clickAway, false));
				}
				else
				{
					document.documentElement.removeEventListener('click', this.clickAway, false);
				}
			},
			clickAway(e)
			{
				if(!e.target.closest('.mobile') && this.mobileNavigation)
				{
					this.toggleMobileNavigation();
				}
			}
		}
	};
</script>

<style scoped>
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

	.whiteBackground {
		color: #0a2140;
		margin-bottom: 70px;
	}

	.logo {
		background: url('~@/assets/images/nuls-logo-white.png') no-repeat;
		float: left;
		width: 135px;
		height: 53px;
		margin-top: 10px;
	}

	a {
		border: none;
	}

	.mobile .navigation {
		position: absolute;
		top: 0;
		left: 0;
		background: #0a2140;
		width: 100%;
		z-index: 1;
		font-size: 20px;
		overflow-y: hidden;
		max-height: 500px;
		transition-property: all;
		transition-duration: 1s;
		transition-timing-function: ease;
	}

	.mobile .navigation.closed {
		max-height: 0;
	}

	.mobile ul {
		margin: 90px 0 50px 0;
	}

	.mobile li {
		text-align: center;
	}

	.mobile a {
		color: #fff;
		display: block;
		padding: 15px;
	}

	.mobile .logo {
		margin: 25px;
	}

	.desktop .navigation,
	.laptop .navigation {
		margin: auto;
		width: 100%;
	}

	.desktop .navigation ul,
	.laptop .navigation ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		text-align: center;
	}

	.desktop .navigation ul li,
	.laptop .navigation ul li {
		display: inline-block;
	}

	.desktop .navigation ul li a,
	.laptop .navigation ul li a {
		display: block;
		padding: 23px;
		text-decoration: none;
		color: #fff;
	}

	.whiteBackground .desktop .navigation ul li a,
	.whiteBackground .laptop .navigation ul li a {
		color: #0a2140;
	}

	.laptop,
	.mobile {
		display: none;
	}

	.hamburger {
		float: right;
		background: url('~@/assets/images/icons/hamburger.png') no-repeat center;
		width: 27px;
		height: 16px;
		padding: 37px;
	}

	.close {
		float: right;
		background: url('~@/assets/images/icons/close.png') no-repeat center;
		width: 21px;
		height: 22px;
		padding: 37px;
	}

	@media screen and (max-width: 1279px) {
		.desktop {
			display: none;
		}

		.laptop {
			display: block;
		}
	}

	@media screen and (max-width: 950px) {
		.laptop {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
</style>
