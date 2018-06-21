<template>
	<div class="section white">
		<div class="container center">
			<div class="spaceship">
				<h2><I18N id="page.index.mission.title" /></h2>
				<h5><I18N id="page.index.mission.usage" /></h5>
				<h5><I18N id="page.index.mission.bottleneck" /></h5>
				<h5><I18N id="page.index.mission.technical" /></h5>
				<h5><I18N id="page.index.mission.trust" /></h5>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.spaceship {
		min-height: 517px;
		margin: 66px auto 78px auto;
		width: 517px;
		background: url(/static/images/rocket.png) no-repeat center;
		padding-top: 90px;
	}

	.spaceship h5 {
		padding: 20px;
	}

	@media screen and (max-width: 517px) {
		.spaceship {
			width: initial;
		}
	}
</style>
