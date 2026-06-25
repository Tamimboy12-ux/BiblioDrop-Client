import Banner from "@/components/home/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import PopularCategories from "@/components/home/PopularCategories";
import TopLibrarians from "@/components/home/TopLibrarians";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <FeaturedBooks></FeaturedBooks>

      <TopLibrarians></TopLibrarians>
      <PopularCategories></PopularCategories>
    </div>
  );
}
