<template>
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
</template>

<style scoped>
	.rectangleContainer {
		position: relative;
		background-image: linear-gradient(-132deg, #04265f 0%, #021234 92%, #021131 100%);
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
		overflow: hidden;
		height: 800px;
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
</style>
