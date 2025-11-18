import { Intro } from "../components/Intro"
import { LatestCourses } from "../components/LatestCourses"

export const Homepage = () => {
  return (
    <div className="h-full">
      <Intro />
      <LatestCourses />
    </div>
  )
}