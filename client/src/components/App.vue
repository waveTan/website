<template>
	<div data-app>
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
			<div class="header">
				<div class="rectangleContainer">
					<div class="rectangle one grid"></div>
					<div class="rectangle two grid"></div>
					<div class="rectangle three"></div>
					<div class="rectangle four"></div>
					<div class="rectangle five"></div>
					<div class="rectangle six grid"></div>
					<div class="rectangle seven"></div>
					<div class="rectangle eight"></div>
					<div class="rectangle nine grid"></div>
					<div class="rectangle ten"></div>
					<div class="rectangle eleven grid"></div>
					<div class="rectangle twelve"></div>
					<div class="rectangle thirteen grid"></div>
					<div class="rectangle fourteen"></div>
					<div class="rectangle fifteen"></div>
					<div class="rectangle sixteen"></div>
					<div class="rectangle seventeen"></div>
					<div class="rectangle eighteen grid"></div>
					<div class="rectangle nineteen"></div>
					<div class="rectangle twenty"></div>
					<div class="rectangle twentyone"></div>
					<div class="rectangle twentytwo"></div>
					<div class="rectangle twentythree"></div>
					<div class="rectangle twentyfour"></div>
					<div class="rectangle twentyfive"></div>
				</div>
				<div class="containerParent">
					<div class="container">
						<div class="logo"></div>
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
												:buttonTitle="false"
												title="About"
												:items="[
											{ title: 'Team' },
											{ title: 'Partners' },
											{ title: 'Join Us' },
											{ title: 'News' }
											]"
										/>
									</a>
								</li>
								<li><a href="#">Forum</a></li>
							</ul>
						</div>
						<h1>Adaptable blockchain for enterprise solutions</h1>
						<div class="playButtonContainer">
							<button class="play-button">
								<img src="/static/images/icons/play.png" alt="Play"/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
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
	};
</script>

<style>
	body {
		font-family: SofiaProLight, sans-serif;
		font-size: 16px;
		color: #445569;
		letter-spacing: 0;
		line-height: 25px;
	}

	h1 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 72px;
		color: #fff;
		text-align: center;
		width: 75%;
		margin: 180px auto 0 auto;
		letter-spacing: -0.77px;
		line-height: 88px;
	}

	h2 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 56px;
		color: #0a2140;
		letter-spacing: 0;
		line-height: 77px;
	}

	h3 {
		font-family: NeuzeitGro-Bol, sans-serif;
		font-size: 28px;
		color: #0a2140;
		letter-spacing: -0.88px;
		line-height: 34px;
	}

	h4 {
		font-family: SofiaProLight, sans-serif;
		font-size: 24px;
		opacity: 0.7;
		color: #445569;
		letter-spacing: 0;
		line-height: 32px;
	}

	.header {
		position: relative;
		width: 100%;
		/*background: linear-gradient(rgba(2, 17, 50), rgba(3, 33, 87));*/
		background-image: linear-gradient(-132deg, #04265f 0%, #021234 92%, #021131 100%);
		/*webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);*/
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
		height: 800px;
	}

	.rectangleContainer {
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
	}

	.rectangle {
		position: absolute;
		top: 0;
		left: 0;
		width: 325px;
		height: 325px;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		opacity: 0.5;
		background-color: rgba(7, 41, 98, 0.3);
	}

	.rectangle.grid {
		background: url('/static/images/header-grid.png') repeat;
	}

	.rectangle.one {
		top: -280px;
		left: -150px;
	}

	.rectangle.two {
		top: 50px;
		left: 0;
	}

	.rectangle.three {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.4);
		top: -190px;
		left: 240px;
	}

	.rectangle.four {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.1);
		top: 0;
		left: 530px;
	}

	.rectangle.five {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.2);
		top: -240px;
		left: 770px;
	}

	.rectangle.six {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.2);
		top: 170px;
		left: 840px;
	}

	.rectangle.seven {
		opacity: 0.8;
		background-color: rgba(7, 41, 98, 0.5);
		top: -70px;
		left: 1080px;
	}

	.rectangle.eight {
		opacity: 0.5;
		background-color: rgba(7, 41, 98, 0.2);
		top: 110px;
		left: 1380px;
	}

	.rectangle.nine {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.9);
		top: -130px;
		left: 1620px;
	}

	.rectangle.ten {
		background-color: rgba(7, 41, 98, 0.8);
		top: 290px;
		left: -240px;
	}

	.rectangle.eleven {
		opacity: 0.2;
		top: 240px;
		left: 290px;
	}

	.rectangle.twelve {
		opacity: 0.8;
		top: 410px;
		left: 600px;
	}

	.rectangle.thirteen {
		opacity: 0.4;
		background-color: transparent;
		top: 480px;
		left: 50px;
	}

	.rectangle.fourteen {
		opacity: 0.4;
		background-color: rgba(7, 41, 98, 0.5);
		top: 350px;
		left: 1140px;
	}

	.rectangle.fifteen {
		opacity: 0.4;
		background-color: transparent;
		top: 500px;
		left: 1470px;
	}

	.rectangle.sixteen {
		opacity: 0.6;
		background-color: rgba(7, 41, 98, 1);
		top: 260px;
		left: 1710px;
	}

	.rectangle.seventeen {
		opacity: 0.4;
		background-color: rgba(7, 41, 98, 0.9);
		top: 650px;
		left: 360px;
	}

	.rectangle.eighteen {
		opacity: 0.15;
		background-color: rgba(7, 41, 98, 0.4);
		top: 590px;
		left: 900px;
	}

	.rectangle.nineteen {
		opacity: 0.15;
		background-color: rgba(7, 41, 98, 0.6);
		top: 20px;
		left: 1950px;
	}

	.rectangle.twenty {
		opacity: 0.5;
		background-color: rgba(7, 41, 98, 0.9);
		top: -220px;
		left: 2190px;
	}

	.rectangle.twentyone {
		opacity: 0.4;
		background-color: rgba(7, 41, 98, 0.3);
		top: 200px;
		left: 2250px;
	}

	.rectangle.twentytwo {
		opacity: 0.15;
		background-color: rgba(7, 41, 98, 0.4);
		top: 440px;
		left: 2010px;
	}

	.rectangle.twentythree {
		opacity: 0.15;
		background-color: rgba(7, 41, 98, 0.4);
		top: -40px;
		left: 2490px;
	}

	.rectangle.twentyfour {
		opacity: 0.6;
		background-color: rgba(7, 41, 98, 0.3);
		top: 90px;
		left: 2840px;
	}

	.rectangle.twentyfive {
		opacity: 1;
		background-color: rgba(7, 41, 98, 0.4);
		top: 330px;
		left: 2600px;
	}

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

	.container {
		position: relative;
		padding-top: 40px;
		margin: auto;
		max-width: 1280px;
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

	.playButtonContainer {
		width: 90px;
		margin: 40px auto 0 auto;
	}

	button.play-button {
		background: #fff;
		box-shadow: -1px 12px 16px 0 rgba(6, 27, 55, 1);
		height: 90px;
		width: 90px;
		border-radius: 45px;
	}

	.spaceship {
		height: 517px;
		margin: 66px auto 78px auto;
		width: 517px;
		background: url(/static/images/rocket.png) no-repeat center;
		padding-top: 90px;
	}

	.spaceship h4 {
		padding: 20px;
	}

	button.play-button img {
		padding: 6px 0 0 10px;
	}

	.section {
		position: static;
		padding-top: 0;
	}

	.section.white {
		background: white;
	}

	.section.grey {
		background-image:
			linear-gradient(
					-134deg,
					#f1f4f8 0%,
					#eff4f8 14%,
					#eff4f8 18%,
					#eff4f8 20%,
					#ecf4f9 46%,
					#ebf4f9 49%,
					#ebf4f9 54%,
					#ebf4f9 57%,
					#eaf4f9 65%,
					#e7f4fa 86%,
					#e7f4fa 90%,
					#e7f4fa 90%,
					#e6f4fa 92%,
					#e6f4fa 100%
				);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
	}

	.center {
		text-align: center;
	}

	.howItWorks {
		padding: 200px 0 135px 0;
	}

	.architecture ul {
		margin-top: 58px;
	}

	.architecture ul li {
		list-style: none;
		border-left: 4px solid #9cbe82;
		padding-left: 28px;
		opacity: 0.25;
	}

	.architecture ul li h3 {
		font-size: 32px;
		letter-spacing: 1px;
		line-height: 34px;
		padding-bottom: 18px;
		color: #445569;
	}

	.architecture ul li p {
		line-height: 10px;
	}

	.architecture ul li.active,
	.architecture ul li:hover {
		opacity: 1;
		border-left: 6px solid #56c400;
		padding-left: 26px;
		cursor: pointer;
	}

	.architecture ul li.active:hover {
		cursor: auto;
	}

	.architecture .graph {
		position: relative;
		overflow: hidden;
		width: 675px;
		height: 607px;
	}

	.architecture .graph::after {
		content: '';
		display: block;
		height: 100%;
		opacity: 0.6;
		background: url('/static/images/architecture-background.png') 50% 0;
		-o-background-size: cover;
		-moz-background-size: cover;
		-webkit-background-size: cover;
		background-size: cover;
	}

	.menu__content {
		box-shadow: none;
	}

	.menu__content .list__tile {
		padding: 0 34px;
	}

	.menu__content .item:not(:first-child) .list__tile {
		border-top: 1px solid #445569;
	}

	.menu__content .item:first-child .list__tile {
		padding-top: 10px;
	}
</style>
