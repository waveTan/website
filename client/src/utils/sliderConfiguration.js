export default function ()
{
	let slidesPerView = 4;

	if(window.innerWidth < 550)
	{
		slidesPerView = 1;
	}
	else if(window.innerWidth < 750)
	{
		slidesPerView = 2;
	}
	else if(window.innerWidth < 1000)
	{
		slidesPerView = 3;
	}

	return {
		slidesPerView,
		spaceBetween: 30,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination'
		}
	};
}
