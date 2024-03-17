import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
const AboutUsPage = () => {
  return (
    <main className="w-[90%] mx-auto h-full my-8 ">
      <section className="bg-slate-100 w-full h-[360px] my-8">
        <p className="text-xl font-medium my-5 mx-5​ flex items-center mx-5">
          <span className="mx-2">
            <FaTerminal />
          </span>
          WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
        </p>
        <p className="font-normal  mx-5 ">
          CSTAD is a noteworthy science and technology center in Cambodia. CSTAD
          has routed Cambodian students to advanced science and technology,
          research, and develop digital skills and our graduates have been
          guaranteed excellent job opportunities with the Top IT company. CSTAD
          will continue to provide high-quality training with the latest
          methodology, and roadmap as well as the best choice for those who want
          to be an IT expert in Cambodia.
        </p>
        <div className="flex justify-center my-5">
          <img
            className="w-52 "
            src="https://istad.co/resources/img/logo_md.png"
          ></img>
        </div>
      </section>
      <section className="bg-slate-100 w-full h-[85px]">
        <p className="text-xl font-medium my-5 mx-5 flex items-center ">
          {" "}
          <span className="mx-2 text-sm  ">
            {" "}
            <FaEye />
          </span>{" "}
          VERSION
        </p>
        <p className="font-normal  mx-5 ">Advanced IT Institute in Cambodia</p>
      </section>
      <section className="bg-slate-100 w-full h-[150px]">
        <p className="text-xl font-medium my-5 mx-5 flex items-center ">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaBullseye />
          </span>{" "}
          MISSION
        </p>
        <ul class="list-disc">
          <li class="mb-2 mx-10">
            Provide the latest methodology with high quality training and
            mentoring
          </li>
          <li class="mb-2 mx-10">
            Build up the capacity and career of IT experts in Cambodia
          </li>
          <li class="mb-2 mx-10">
            Consult and connect CSTAD trainees to top IT careers
          </li>
        </ul>
      </section>
      <section className="bg-slate-100 my-5 w-full h-[85px]">
        <p className="text-xl font-medium my-3 mx-5  flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaCommentDots />
          </span>{" "}
          SLOGAN
        </p>
        <p className="font-normal mx-5 ">Start your IT Career with CSTAD</p>
      </section>
      <p className="text-2xl font-bold text-blue-900 text-center">
        IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
      </p>
      <section className=" font-normal bg-slate-100 my-5 w-full h-[190px]">
        <p className=" mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaLocationDot />
          </span>{" "}
          No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh,
          Cambodia
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <IoMdPhonePortrait />
          </span>{" "}
          (+855) 95 990 910 | (+855) 93 990 910
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaTelegram />
          </span>{" "}
          Telegram Channel
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaFacebook />
          </span>{" "}
          Facebook
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <IoMail />
          </span>{" "}
          info.istad@gmail.com
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <IoEarthSharp />
          </span>{" "}
          www.istad.co
        </p>
        <p className="mx-5 flex items-center">
          <span className="mx-2 text-sm  ">
            {" "}
            <FaYoutube />
          </span>{" "}
          YouTube
        </p>
      </section>
    </main>
  );
};
export default AboutUsPage;
