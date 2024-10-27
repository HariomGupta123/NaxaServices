import { ArrowRight, icons } from "lucide-react";
import {  useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { FaUsers } from 'react-icons/fa'; // Import the team icon
import { FaHandshake } from "react-icons/fa";
import { FaAward } from 'react-icons/fa'; // Import the award icon

const company = [
  {
    name: "About Us",
    link: "https://www.naxa.com.np/about",
    icons: <FaUsers />,
  },
  {
    name: "work with us",
    link: "https://www.naxa.com.np/workwithus",
    icons: <FaHandshake />,
  },
  {
    name: "Team",
    link: "https://www.naxa.com.np/team",
    icons: <FaUsers />,
  },
  {
    name: "Award and Achievement",
    link: "https://www.naxa.com.np/awards-and-achievements",
    icons: <FaAward />,
  },
];
const Porfolio = [
  {
    name: "General",
    link: "/general",
  },
  {
    name: "InterNational",
    link: "/international",
  },
];
const media = [
  {
    name: "Event",
    link: "https://www.naxa.com.np/events/All",
  },
  {
    name: "Media",
    link: "https://www.naxa.com.np/medias/All",
  },
  {
    name: "Publication",
    link: "https://www.naxa.com.np/publications/All",
  },
];

// Example of how to use this array in a component




const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        Porfolio: false,
        Company: false,
        EventsMedia:false
    });
     

     // Uncomment these lines to handle loading and error
     // if (loading) return <p>Loading...</p>;
     // if (error) return <p>Error: {error}</p>;

    //  console.log("reducer fetched data", data);
   const handleDropdownToggle = (name) => {
     setDropdownOpen((prev) => ({
       ...prev,
       [name]: !prev[name],
     }));
   };

      //  const HandleArrow = () => {
      //    setIsOpen(!isOpen);
      //  };

   
    return (
      <div className="w-full ">
        <div
          className={`w-full lg:h-12 py-4  bg-amber-300 text-center font-medium text-base underline flex justify-center  items-center hover:text-blue-600 cursor-pointer flex-wrap`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={`transition-colors duration-300 ${
              isHovered ? "text-blue-500" : "text-black"
            }`}
          >
            {" "}
            We have been working on several initiatives during the
            Jajarkot-Rukum Earthquake Response 2023. Check them out{" "}
          </span>
          <span>
            {isHovered && <ArrowRight className="text-blue-500  " size={20} />}
          </span>
        </div>
        <div className="flex w-[100%] justify-around p-2">
          <div className="">
            {" "}
            <img
              src="https://www.naxa.com.np/ac468ef024692c042053c13a69625759.png"
              alt="logo"
              style={{ color: "blue", backgroundColor: "black" }}
            />
          </div>

          {/*  */}
          <div className="hidden justify-center items-center gap-8  md:flex ">
            <Link
              to={"/"}
              className="block px-4 py-2 text-gray-700 cursor-pointer"
            >
              Services
            </Link>
            <span
              className="relative"
              onMouseEnter={() => handleDropdownToggle("Porfolio")}
              onMouseLeave={() => handleDropdownToggle("Porfolio")}
            >
              {" "}
              Porfolio
              {dropdownOpen.Porfolio && <DropDown items={Porfolio} />}
            </span>
            <span
              className="relative"
              onMouseEnter={() => handleDropdownToggle("Company")}
              onMouseLeave={() => handleDropdownToggle("Company")}
            >
              Company
              {dropdownOpen.Company && <DropDown items={company} />}
            </span>

            <Link to={"/geoai"} className="block px-4 py-2 cursor-pointer">
              GeoAI
            </Link>
            <span
              className="relative"
              onMouseEnter={() => handleDropdownToggle("EventsMedia")}
              onMouseLeave={() => handleDropdownToggle("EventsMedia")}
            >
              {" "}
              Event & Media
              {dropdownOpen.EventsMedia && <DropDown items={media} />}
            </span>
            <Link
              to={"/pages/blogs"}
              className="block px-4 py-2 text-gray-700  cursor-pointer"
            >
              Blogs
            </Link>
          </div>
          <Link
            to={"https://www.naxa.com.np/contact/iamabusiness"}
            className="bg-amber-300 pt-3   text-center flex justify-center cursor-pointer w-[150px] hover:bg-orange-500  "
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            
              <span className="text-center">Let's talk</span>
              {isHovered1 && (
                <ArrowRight
                  className="text-blue-500  transition-opacity duration-350 opacity-100 pt-1"
                  size={20}
                />
              )}
          
          </Link>
          <div className="md:hidden top-3 ">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 focus:outline-none"
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="md:hidden bg-amber-300 shadow-md absolute right-0 top-0 h-[100vh] w-[60%] text-end">
              <FiX
                onClick={() => setIsOpen(false)}
                size={24}
                width={50}
                style={{ marginTop: 10 }}
              />
              <Link
                to={"/"}
                className="block px-4 py-2 text-gray-700 cursor-pointer"
              >
                Services
              </Link>
              <span
                className="relative"
                onMouseEnter={() => handleDropdownToggle("Porfolio")}
                onMouseLeave={() => handleDropdownToggle("Porfolio")}
              >
                {" "}
                Porfolio
                {dropdownOpen.Porfolio && (
                  <DropDown items={["General", "International"]} />
                )}
              </span>
              <span
                className="relative"
                onMouseEnter={() => handleDropdownToggle("Company")}
                onMouseLeave={() => handleDropdownToggle("Company")}
              >
                Company
                {dropdownOpen.Company && (
                  <DropDown
                    items={[
                      "About us",
                      "Team",
                      "Work with Us",
                      "Award with Achievements",
                    ]}
                  />
                )}
              </span>

              <Link to={"/geoai"} className="block px-4 py-2 cursor-pointer">
                GeoAI
              </Link>
              <span
                className="relative"
                onMouseEnter={() => handleDropdownToggle("EventsMedia")}
                onMouseLeave={() => handleDropdownToggle("EventsMedia")}
              >
                {" "}
                Event & Media
                {dropdownOpen.EventsMedia && (
                  <DropDown items={["Event", "Media", "publications"]} />
                )}
              </span>
              <Link
                to={"/pages/blogs"}
                className="block px-4 py-2 text-gray-700  cursor-pointer"
              >
                Blogs
              </Link>
            </div>
          </>
        )}
      </div>
    );
}

export default Header
