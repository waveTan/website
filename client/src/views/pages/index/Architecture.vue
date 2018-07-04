<template>
	<div class="section white">
		<div class="container">
			<h2><I18N id="page.index.architecture.title" /></h2>
			<ul>
				<li :class="{ active: isActive('logicLayer') }" @mouseover="setActive('logicLayer')">
					<h4><I18N id="page.index.architecture.logicLayer.title" /></h4>
					<p><I18N id="page.index.architecture.logicLayer.p1" /></p>
					<p><I18N id="page.index.architecture.logicLayer.p2" /></p>
					<div :class="{ active: isActive('logicLayer') }" class="mobile graph">
						<img
							src="@/assets/images/logic-layer.jpg"
							alt=""
							width="100%"
						>
					</div>
				</li>
				<li :class="{ active: isActive('moduleLayer') }" @mouseover="setActive('moduleLayer')">
					<h4><I18N id="page.index.architecture.moduleLayer.title" /></h4>
					<p><I18N id="page.index.architecture.moduleLayer.p1" /></p>
					<p><I18N id="page.index.architecture.moduleLayer.p2" /></p>
					<div :class="{ active: isActive('moduleLayer') }" class="mobile graph">
						<img
							src="@/assets/images/module-layer.jpg"
							alt=""
							width="100%"
						>
					</div>
				</li>
				<li :class="{ active: isActive('chainLayer') }" @mouseover="setActive('chainLayer')">
					<h4><I18N id="page.index.architecture.chainLayer.title" /></h4>
					<p><I18N id="page.index.architecture.chainLayer.p1" /></p>
					<p><I18N id="page.index.architecture.chainLayer.p2" /></p>
					<div :class="{ active: isActive('chainLayer') }" class="mobile graph">
						<img
							src="@/assets/images/chain-layer.jpg"
							alt=""
							width="100%"
						>
					</div>
				</li>
				<li :class="{ active: isActive('crossChain') }" @mouseover="setActive('crossChain')">
					<h4><I18N id="page.index.architecture.crossChain.title" /></h4>
					<p><I18N id="page.index.architecture.crossChain.p1" /></p>
					<p><I18N id="page.index.architecture.crossChain.p2" /></p>
					<div :class="{ active: isActive('crossChain') }" class="mobile graph">
						<img
							src="@/assets/images/cross-chain.jpg"
							alt=""
							width="100%"
						>
					</div>
				</li>
			</ul>
			<div :class="active" class="graph">
				<div class="images">
					<img
						ref="img-logicLayer"
						src="@/assets/images/logic-layer.jpg"
						alt=""
						width="100%"
					>
					<img
						ref="img-moduleLayer"
						src="@/assets/images/module-layer.jpg"
						alt=""
						width="100%"
					>
					<img
						ref="img-chainLayer"
						src="@/assets/images/chain-layer.jpg"
						alt=""
						width="100%"
					>
					<img
						ref="img-crossChain"
						src="@/assets/images/cross-chain.jpg"
						alt=""
						width="100%"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				active: 'logicLayer'
			};
		},
		methods: {
			setActive(key)
			{
				this.active = key;

				['logicLayer', 'moduleLayer', 'chainLayer', 'crossChain'].forEach((i) => this.$refs[`img-${i}`].classList.add('transparent'));
				this.$refs[`img-${key}`].classList.remove('transparent');
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
		background: url('~@/assets/images/architecture-background.png') 50% 0;
	}

	.images {
		position: relative;
		margin: 0 auto;
	}

	.images img {
		position: absolute;
		left: 0;
		transition: opacity 1s ease-in-out;
	}

	.images img.transparent {
		opacity: 0;
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
