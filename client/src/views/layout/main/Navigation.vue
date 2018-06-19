<template>
	<div class="containerParent">
		<div class="container">
			<div class="logo" />
			<div class="navigation">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Wallet</a></li>
					<li><a href="#">DApps</a></li>
					<li><a href="#">Documentation</a></li>
					<li><a href="#">Blochchain Explorer</a></li>
					<li>
						<a href="#">
							<Dropdown
								:useButton="false"
								:items="[
									{ title: 'Team' },
									{ title: 'Partners' },
									{ title: 'Join Us' },
									{ title: 'News' }
								]"
								title="About"
							/>
						</a>
					</li>
					<li><a href="#">Forum</a></li>
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
		}
	};
</script>

<style scoped>
	.containerParent {
		font-family: SofiaProLight, sans-serif;
		font-size: 18px;
		color: #fff;
		letter-spacing: 0.24px;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.logo {
		background: url('/static/images/nuls-logo-white.png') no-repeat;
		float: left;
		width: 135px;
		height: 53px;
		margin-top: 10px;
	}

	.navigation {
		margin: auto;
		width: 100%;
	}

	.navigation ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		text-align: center;
	}

	.navigation ul li {
		display: inline-block;
	}

	.navigation ul li a {
		display: block;
		padding: 23px;
		text-decoration: none;
		color: white;
	}
</style>
