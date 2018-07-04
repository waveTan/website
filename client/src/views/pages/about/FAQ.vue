<template>
	<div class="section container">
		<h2><I18N id="page.about.faq.title" /></h2>
		<ul>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.faq" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.whitepaper" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.yellowpaper" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.poc" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.modularization" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.multiChainMechanism" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.dAppDevelopment" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home' }">
					<I18N id="page.about.faq.bounty" />
					<img src="@/assets/images/icons/arrow-right.png" alt="">
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	ul {
		opacity: 0.9;
		background-image: linear-gradient(-133deg, #002e5e 0%, #0a2140 100%);
		border-radius: 8px;
		padding: 30px 0;
	}

	li {
		font-size: 20px;
		letter-spacing: 0;
		line-height: 30px;
		padding: 10px 42px;
		list-style: none;
	}

	a {
		color: #fff;
		border-bottom: 1px solid #fff;
	}
</style>
