<template>
	<div class="section white">
		<div class="container">
			<h2>Architecture</h2>
			<ul>
				<li :class="{ active: isActive('loginLayer') }" @click="setActive('loginLayer')">
					<h4>Login layer</h4>
					<p>Smart contracts as logic containers</p>
					<p>Higher flexibility and wider application</p>
					<div :class="{ active: isActive('loginLayer') }" class="mobile graph" />
				</li>
				<li :class="{ active: isActive('moduleLayer') }" @click="setActive('moduleLayer')">
					<h4>Module layer</h4>
					<p>Ongoing development of new modules by core/community developers</p>
					<p>Online management under NULS module depository</p>
					<div :class="{ active: isActive('moduleLayer') }" class="mobile graph" />
				</li>
				<li :class="{ active: isActive('chainLayer') }" @click="setActive('chainLayer')">
					<h4>Chain layer</h4>
					<p>Variable as needed and easily customized</p>
					<p>Various customizable modules for public, private, and enterprise blockchains</p>
					<div :class="{ active: isActive('chainLayer') }" class="mobile graph" />
				</li>
				<li :class="{ active: isActive('crossChain') }" @click="setActive('crossChain')">
					<h4>Cross-chain</h4>
					<p>High scalability and rapid value transmission</p>
					<p>Connection via cross-chain consensus modules</p>
					<div :class="{ active: isActive('crossChain') }" class="mobile graph" />
				</li>
			</ul>
			<div class="graph" />
		</div>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				active: 'loginLayer'
			};
		},
		methods: {
			setActive(key)
			{
				this.active = key;
			},
			isActive(key)
			{
				return this.active === key;
			}
		}
	};
</script>

<style scoped>
	ul {
		float: left;
		width: 50%;
		margin-top: 58px;
	}

	ul li {
		list-style: none;
		border-left: 4px solid #9cbe82;
		padding-left: 28px;
		opacity: 0.25;
	}

	ul li h4 {
		font-size: 32px;
		letter-spacing: 1px;
		line-height: 34px;
		padding-bottom: 18px;
		color: #445569;
	}

	ul li p {
		line-height: 10px;
	}

	ul li.active,
	ul li:hover {
		opacity: 1;
		border-left: 6px solid #56c400;
		padding-left: 26px;
		cursor: pointer;
	}

	.ul li.active:hover {
		cursor: auto;
	}

	.graph {
		position: relative;
		overflow: hidden;
		/*width: 675px;*/
		height: 607px;
		width: 50%;
	}

	.graph::after {
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

	.mobile {
		display: none;
	}

	@media screen and (max-width: 800px) {
		ul {
			float: none;
			width: 100%;
		}

		/*ul li p {*/
		/*line-height: initial;*/
		/*}*/

		.graph {
			width: 100%;
			display: none;
		}

		.mobile.active {
			display: block;
		}
	}
</style>
