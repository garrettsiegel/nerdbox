import { LazyImage } from "react-lzy-img"
import { Intro } from "../components/Intro"
import { LatestCourses } from "../components/LatestCourses"

export const Homepage = () => {
  return (
    <div className="h-full">
      <Intro />
      <LatestCourses />

      <LazyImage
        src="https://a.espncdn.com/photo/2025/0716/cursedfans_16x9.png"
        alt="Sports Misery Index Project"
        blurhash="LHPFQL%#_Os9rYOrt,r@@FPUMdcE"
        className="w-1/2 h-auto rounded-xl shadow-lg overflow-hidden"
        onLoad={() => console.log('Image loaded!')}

      />
    </div>
  )
}