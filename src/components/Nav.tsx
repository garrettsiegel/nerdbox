import { Link } from "react-router-dom"
import { Button } from "./Button";


export const Nav = () => {
  return (
    <nav className="p-4 bg-blue-300 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <Link to="/" className="flex flex-col items-start">
          <h1 className="text-3xl ultra-regular leading-none">NerdBox</h1>
          <p className="text-[12px]">Your resources for Web Development</p>
        </Link>


        <ul className="flex gap-4 list-none font-bold text-[14px]">
          <li><Link to="/Courses">Courses</Link></li>
          <li><Link to="/Bootcamps">Bootcamps</Link></li>
          <li><Link to="/Articles">Articles</Link></li>
          <li><Link to="/Books">Books</Link></li>
          <li><Link to="/Tutorials">Tutorials</Link></li>
          <li><Link to="/YTVideos">YT Videos</Link></li>
        </ul>
      </div>

      <div className="flex gap-2">
        {/* TODO: add auth here */}
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <Button>Subscribe</Button>
      </div>

    </nav>
  );
}