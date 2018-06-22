<template>
	<div class="header">
		<HeaderMeta />
		<h1><I18N id="page.index.header.title" /></h1>
		<div class="playButtonContainer">
			<button class="play-button">
				<img src="/static/images/icons/play.png" alt="Play" >
			</button>
		</div>
		<div class="container">
			<img
				class="slabs"
				src="/static/images/animations/slabs.svg"
				width="300px"
			>
			<img
				class="cubes"
				src="/static/images/animations/cubes-sync.svg"
				width="350px"
			>
		</div>
	</div>
</template>

<style scoped>
	.header {
		position: absolute;
		top: 120px;
		width: 100%;
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

	button.play-button img {
		padding: 6px 0 0 10px;
	}

	.container {
		margin-top: 100px;
	}

	img.slabs {
		float: right;
	}

	img.cubes {
		float: left;
	}
</style>
