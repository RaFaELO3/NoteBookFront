/*=================================
          News Carousel
==================================*/

const newsCarousel = document.querySelector(".carousel-news")
$.getScript('assets/js/news.js', function () {
  const news = getNews(3);
  news.forEach(function (i) {
    newsCarousel.innerHTML += `<div class="carousel-news-box" style="background-image: url(${i.news_image});">
    <div class="carousel-news-content">
      <div class="carousel-news-header pb-2">
        <h1 class="carousel-news-heading">${i.title}</h1>
      </div>
      <div class="carousel-news-body">
        <p>${i.description}</p>
      </div>
    </div>
  </div>`
  })

  $(newsCarousel).slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    default: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
/*=================================
          Partners Carousel
==================================*/
$(".carousel-partner").slick({
  infinite: true,
  autoplay: true,
  default: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});

/*=================================
          Projects Carousel
==================================*/

$(".carousel-projects").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});