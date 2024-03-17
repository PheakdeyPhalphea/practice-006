import ContentCardComponent from "@/components/ContentCardComponent/ContentCard";

const ItNewsPage = () => {
  return (
    <main  className="w-[90%] mx-auto my-8">
      <p className="text-2xl font-bold ">UseFull Content</p>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
        <ContentCardComponent />
      </section>
    </main>
  );
};
export default ItNewsPage;
