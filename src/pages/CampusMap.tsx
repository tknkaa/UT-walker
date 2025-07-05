import campusMapImage from "../assets/komabamap.png";
import { Link } from "react-router-dom";

export default function CampusMap() {
  return (
    <div className="relative">
      <img src={campusMapImage} alt="campus map" />
      <div className="absolute top-[70%] left-[60%] bg-white">
        <Link to="library">駒場図書館</Link>
      </div>
    </div>
  );
}
