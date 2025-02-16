import { useState } from "react";

type CarouselSliderProps = {
  contents: React.ReactNode[];
  contentClassName?: string;
};

const CarouselSlider = ({
  contents,
  contentClassName,
}: CarouselSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="carousel-slider">
      <div className={contentClassName}>{contents[currentSlide]}</div>

      {/* Buttons to change slide */}
      <div className="slider-buttons flex space-x-3 justify-center mt-4">
        {contents.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={
              "block w-3 h-3 bg-zinc-200 rounded-full cursor-pointer " +
              (currentSlide === index ? "bg-zinc-500" : "")
            }
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CarouselSlider;
