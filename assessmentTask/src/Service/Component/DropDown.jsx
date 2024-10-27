import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropDown = ({ items }) => {
  return (
    <div className="absolute top-full  w-60 bg-white flex-wrap ">
      <div className="relative w-0 h-0 left-10 transform -translate-x-1/2 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-blue-500 shadow-lg"></div>

      <div className="absolute top-full  w-60 bg-white flex-wrap rounded-md shadow-lg">
        {items.map((item, index) => (
          <Link
            key={index}
            className=" px-4 py-2 text-gray-700 hover:bg-gray-200 flex  gap-3"
            to={item.link}
           >
            <span className="pt-1">{item.icons}</span>
                <h2>{item.name}</h2>
             
           
          </Link>
        ))}
      </div>
    </div>
  );
};

// Prop validation to avoid ESLint warnings
DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDown;
