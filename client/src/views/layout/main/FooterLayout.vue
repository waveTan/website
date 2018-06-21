<template>
	<div class="section footer">
		<div class="container social">
			<div>
				<h3>Join <b>NULS</b> community</h3>
				<p>We believe that NULS has the most cutting-edge modular thinking towards reshaping the world.</p>
				<p>We encourage fans to join our global community!</p>
			</div>
			<div class="buttons">
				<Button
					:shadow="false"
					colour="white"
					textClass="blue"
				>
					View NULS Team
				</Button>
				<Button colour="transparent">Join us</Button>
			</div>
			<div class="links">
				<a href="#"><img src="/static/images/icons/slack.png" alt="Slack"></a>
				<a href="#"><img src="/static/images/icons/gitter.png" alt="Gitter"></a>
				<a href="#"><img src="/static/images/icons/steemit.png" alt="Steemit"></a>
				<a href="#"><img src="/static/images/icons/discord.png" alt="Discord"></a>
				<a href="#"><img src="/static/images/icons/reddit.png" alt="Reddit"></a>
				<a href="#"><img src="/static/images/icons/github.png" alt="Github"></a>
				<a href="#"><img src="/static/images/icons/telegram.png" alt="Telegram"></a>
			</div>
		</div>
		<div class="container">
			<hr class="top">
			<h4>
				Let's talk about how NULS can help your enterprise
				<Button class="contactUs">Contact us</Button>
			</h4>
			<hr class="bottom">
			<v-container grid-list-md text-xs-center>
				<v-layout row wrap>
					<v-flex
						xs12
						sm3
						md2
					>
						<div class="disclaimer">
							<div class="logo" />
							<p>Copyright &copy; 2017 NULS</p>
							<p>Proudly built in Singapore</p>
							<p>Website design by petravic</p>
						</div>
					</v-flex>
					<v-flex
						xs12
						sm9
						md10
					>
						<v-layout row wrap>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5>About</h5>
									<ul>
										<li>NULS</li>
										<li>Team</li>
										<li>Partners</li>
										<li>News</li>
									</ul>
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5>Downloads</h5>
									<ul>
										<li>Whitepaper</li>
										<li>Yellowpaper</li>
										<li>Wallet</li>
										<li>DAPPS</li>
									</ul>
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5>Follow us</h5>
									<ul>
										<li>Twitter</li>
										<li>Facebook</li>
										<li>Medium</li>
										<li>Youtube</li>
										<li>WeChat</li>
										<li>Weibo</li>
									</ul>
								</div>
							</v-flex>
							<v-flex
								xs6
								sm6
								md3
							>
								<div>
									<h5>Support</h5>
									<ul>
										<li>FAQ's</li>
										<li>Join us</li>
									</ul>
								</div>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</div>
</template>

<script>
	import Button from '@/components/vuetify/Button';

	export default {
		components: {
			Button
		}
	};
</script>

<style scoped>
	.section {
		margin-top: 140px;
	}

	.footer {
		background-image: linear-gradient(-1deg, #04265f 0%, #021131 97%);
		color: #fff;
		letter-spacing: 0;
		line-height: 23px;
		display: block;
	}

	li,
	p {
		opacity: 0.5;
	}

	li {
		list-style: none;
		padding: 6px 0;
	}

	ul {
		margin-top: 30px;
	}

	.social {
		background-image: linear-gradient(-133deg, #002e5e 0%, #092243 89%, #0a2140 100%);
		box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.24);
		border-radius: 6px;
		position: relative;
		top: -60px;
		padding: 50px 85px;
	}

	@media screen and (max-width: 800px) {
		.social {
			padding: 50px 60px;
		}
	}

	@media screen and (max-width: 600px) {
		.social {
			padding: 50px 40px;
		}
	}

	@media screen and (max-width: 350px) {
		.social {
			padding: 50px 10px;
		}
	}

	@media screen and (max-width: 600px) {
		h5 {
			margin-top: 20px;
		}

		ul {
			margin: 0;
		}
	}

	.links {
		display: inline-block;
	}

	.social a {
		float: right;
		width: 42px;
		height: 42px;
		margin: 12px 28px;
	}

	.social .buttons {
		display: inline-block;
		vertical-align: top;
	}

	.disclaimer {
		font-size: 14px;
		letter-spacing: -0.47px;
		line-height: 26px;
	}

	hr {
		opacity: 0.1;
		border: 1px solid #fff;
	}

	hr.top {
		margin: -30px 0 25px 0;
	}

	hr.bottom {
		margin: 25px 0 70px 0;
	}

	h3,
	h4,
	h5 {
		opacity: 1;
		color: #fff;
	}

	.logo {
		background: url('/static/images/nuls-footer-logo.png') no-repeat center;
		width: 100%;
		height: 75px;
	}

	h4 {
		text-align: center;
	}
</style>
