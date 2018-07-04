<template>
	<div class="header">
		<h1><I18N id="page.index.header.title" /></h1>
		<div class="iconContainer">
			<button class="play-button">
				<img src="@/assets/images/icons/arrow-right-green.png" alt="Play" >
			</button>
		</div>
		<div class="container">
			<img
				class="slabs"
				src="@/assets/images/animations/slabs.svg"
				width="300px"
			>
			<img
				class="cubes"
				src="@/assets/images/animations/cubes-sync.svg"
				width="350px"
			>
		</div>
	</div>
</template>

<style scoped>
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
