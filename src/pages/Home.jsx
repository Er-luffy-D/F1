import { Video } from "../components/home/Video"
import { HomeHeroText } from "../components/home/HomeHeroText"
import { HomeBottomText } from "../components/home/HomeBottomText"
import { HomeMiddleText } from "../components/home/HomeMiddleText"
const Home = () => {
  return (
    <div>

      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between ">
        <HomeHeroText></HomeHeroText>
        <HomeMiddleText/>
        <HomeBottomText></HomeBottomText>
      </div>
    </div>
  )
}

export default Home
