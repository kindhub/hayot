import VSwiper from "./modules/VSwiper";
import VacancyBtn from "./modules/VacancyBtn";
import Anchor from "./modules/Anchor";
import Nav from "./modules/Nav";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
function initAtmosphere() {
  swiper.init(".tmpl-hh__atmosphere__slider", {
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    pagination: {
      el: ".tmpl-hh__atmosphere-progress__slider-pagination",
      type: "custom",
      renderCustom(swiper, current, total) {
        const progress = (current / (total - 1)) * 75;
        document.querySelector(
          ".tmpl-hh__atmosphere-progress__slider-pagination"
        ).style.width = progress + "%";
      },
    },
    breakpoints: {
      699: {
        pagination: {
          el: ".tmpl-hh__atmosphere-progress__slider-pagination",
          type: "custom",
          renderCustom(swiper, current, total) {
            const progress = (current / (total - 1)) * 65;
            document.querySelector(
              ".tmpl-hh__atmosphere-progress__slider-pagination"
            ).style.width = progress + "%";
          },
        },
      },
    },
    breakpoints: {
      529: {
        pagination: {
          el: ".tmpl-hh__atmosphere-progress__slider-pagination",
          type: "custom",
          renderCustom(swiper, current, total) {
            const progress = (current / (total - 1)) * 54;
            document.querySelector(
              ".tmpl-hh__atmosphere-progress__slider-pagination"
            ).style.width = progress + "%";
          },
        },
      },
    },
    on: {
      init: function () {
        updateCustomPagination(this);
      },
      slideChangeTransitionEnd: function () {
        const currentSlide = this.activeIndex + 1; // Текущий слайд
        updateCustomPagination(this, currentSlide);
      },
    },
    navigation: {
      prevEl: ".tmpl-hh__atmosphere-slider-arrow-prev",
      nextEl: ".tmpl-hh__atmosphere-slider-arrow-next",
    },
  });
}
function updateCustomPagination(swiper) {
  const totalSlides = swiper.slides.length;
  const currentSlide = swiper.realIndex + 1; // Используем realIndex
  const paginationElement = document.querySelector(
    ".tmpl-hh__atmosphere__slider-pagination"
  );
  paginationElement.textContent = `${currentSlide} | 8`;
}
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const tabs = document.querySelectorAll(".tmpl-hh__tab");
tabs.forEach((tab) => {
  const tabContent = tab.querySelector(".tmpl-hh__tab-content");
  const tabBtn = tab.querySelector(".tmpl-hh__tab-btn");

  tab.addEventListener("click", () => {
    tabs.forEach((otherTab) => {
      const otherTabContent = otherTab.querySelector(".tmpl-hh__tab-content");
      const otherTabBtn = otherTab.querySelector(".tmpl-hh__tab-btn");

      if (otherTabContent !== tabContent) {
        otherTabContent.style.maxHeight = null;
        otherTab.classList.remove("tmpl-hh__tab--active");
        otherTabBtn.classList.remove("tmpl-hh__active");
      }
    });

    if (tabContent.style.maxHeight) {
      tabContent.style.maxHeight = null;
      tab.classList.remove("tmpl-hh__tab--active");
      tabBtn.classList.remove("tmpl-hh__active");
    } else {
      tabContent.style.maxHeight = tabContent.scrollHeight + "px";
      tab.classList.add("tmpl-hh__tab--active");
      tabBtn.classList.add("tmpl-hh__active");
    }
  });
});

const swiper = new VSwiper();
new VacancyBtn();
new Anchor();
new Nav();

initAtmosphere();
