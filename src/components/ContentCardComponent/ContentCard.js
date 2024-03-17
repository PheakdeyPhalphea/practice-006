import { Card } from "flowbite-react";
const ContentCardComponent = () => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://api.istad.co/media/image/e391212d-aac5-460c-bd17-f95f468e4408.PNG"
    >
      <div className="flex justify-between">
        <p className="event-category text-white">
          <span>Blog</span>
        </p>
        <p className="post-date text-white">27-Jul-2022</p>
      </div>
      <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
        Top Interesting Facts About C++
      </h5>
    </Card>
  );
};
export default ContentCardComponent;
