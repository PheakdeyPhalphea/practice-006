import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
const NavbarComponent = () => {
  return (
    <Navbar fluid className="h-16 bg-gray-700">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="https://istad.co/resources/img/CSTAD_120.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink  className="text-white" href="home">
          Home
        </NavbarLink>
        <NavbarLink  className="text-white" as={Link} href="enroll">
          Enroll
        </NavbarLink>
        <NavbarLink className="text-white" href="course">Course</NavbarLink>
        <NavbarLink className="text-white" href="news">IT News</NavbarLink>
        <NavbarLink className="text-white"  href="jobpage">Job Opportunity</NavbarLink>
        <NavbarLink className="text-white" href="aboutus">About Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavbarComponent;
