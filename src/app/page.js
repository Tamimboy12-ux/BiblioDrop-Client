import Banner from "@/components/home/Banner";
import PopularCategories from "@/components/home/PopularCategories";
import TopLibrarians from "@/components/home/TopLibrarians";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <TopLibrarians></TopLibrarians>
      <PopularCategories></PopularCategories>
    </div>
  );
}
