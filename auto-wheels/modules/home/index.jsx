import Hero from "./Hero";
import BrowseByCategory from "./BrowseByCategory";
import BrowseByType from "./BrowseByType";
import ComparisonProducts from "./ComparisonProducts";
import SearchByLocations from "./SearchByLocations";
import BrowseVideos from "@/components/videos/browse-videos";
import BrowseBlogs from "@/components/blog/browse-blogs";
import {fetcHomeData} from "../../services/home"

export default async  function HomeModule() {
 const res= await fetcHomeData()

  return (
    <>
      <Hero />
      <BrowseByCategory makes={res?.makes} bodies={res?.bodies}/>
      <BrowseByType vehicles={res?.vehiclesTypes}/>
      <ComparisonProducts />
      <SearchByLocations />
      <BrowseVideos />
      <BrowseBlogs />

     
    </>
  );
}
