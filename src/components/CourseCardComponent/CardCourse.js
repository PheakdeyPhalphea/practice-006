import { Card } from "flowbite-react";
const CourseCardComponent = () => {
  return (
    <Card
      className="max-w-sm"
      imgSrc="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        FLUTTER MOBILE DEVELOPMENT
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Flutter course is designed to develop multi-platform like iOS and
        Android App ...
      </p>
    </Card>
  );
};
export default CourseCardComponent;
