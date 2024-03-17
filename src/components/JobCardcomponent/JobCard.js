import { Card } from "flowbite-react";
const JobCardComponent = () => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png"
    >
      <div className="flex justify-between">
        <p className="event-category text-white">
          <span>Blog</span>
        </p>
        <p className="post-date text-white">27-Jul-2022</p>
      </div>
      <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
      Senior Spring Web Developer
      </h5>
    </Card>
  );
};
export default JobCardComponent;
