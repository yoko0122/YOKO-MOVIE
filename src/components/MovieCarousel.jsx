import HeroBanner from "./MovieCarouselItem"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export const MovieCarousel = () => {
    return <div>

<Carousel 
        className="relative mt-10"
                plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <HeroBanner/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="invisible lg:visible absolute left-5 to-50%"/>
            <CarouselNext className="invisible lg:visible absolute right-5 to-50%"/>
        </Carousel>
    </div>
}