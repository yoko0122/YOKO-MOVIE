import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import HeroBanner from '../components/MovieCarouselItem';
import { MovieCarousel } from '../components/MovieCarousel';
import { Upcoming } from '../components/Upcoming';
import { Popular } from '../components/Popular';
import { Toprated } from '../components/Toprated';


export default function Home() {
  return (
    <>
      <Header />
      <MovieCarousel />
      <Upcoming/>
      <Popular />
      <Toprated />
      <Footer />
    </>
  );
}
