import { Intro } from "./Intro"
import { LatestCourses } from "./LatestCourses"

export const Homepage = () => {
  return (
    <div className="h-full">
      <Intro />
      <LatestCourses />
    </div>
  )
}