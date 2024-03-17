import ContentCardComponent from "@/components/ContentCardComponent/ContentCard";
import CourseCardComponent from "@/components/CourseCardComponent/CardCourse";

export default function Home() {
  return (
    <main className="w-[90%] mx-auto my-8">
      <p className="text-2xl font-bold ">COURSE</p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
        <CourseCardComponent />
      </section>
      <p className="text-2xl font-bold ">UseFull Content</p>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
      </section>
    </main>
  );
}
