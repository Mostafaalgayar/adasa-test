import Hero from "../Components/Hero/Hero";
import FeaturedArticles from "../Components/Featured Articles/FeaturedArticles";
import Categories from "../Components/Categories/Categories";
import LatestArticles from "../Components/LastestArticles/LatesetArticles";
import Newsletter from "../Components/Newsletter/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <Newsletter />
    </>
  );
}

export default Home;