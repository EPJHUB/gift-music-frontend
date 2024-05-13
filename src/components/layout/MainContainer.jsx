import Header from "../shared/Header";

const MainContainer = ({ children, isPublic = false }) => {
  return (
    <section className="h-screen bg-black flex flex-col gap-20 overflow-x-hidden">
      {isPublic ? <header className="h-min bg-primary-dark text-white flex justify-center px-8 py-4 relative"><h3>GIFT MUSIC</h3></header> : <Header />}
      <main className="h-auto w-[97%] bg-primary-dark rounded-3xl p-6 grid gap-4 self-center">
        {children}
      </main>
    </section>
  );
};
export default MainContainer;
