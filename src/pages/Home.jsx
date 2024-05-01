const Home = () => {
  return (
    <section className="h-screen bg-black flex flex-col gap-20">
      <header className="h-min bg-primary-dark text-white flex justify-between px-8 py-4">
        <button className="text-xl">GIFT MUSIC</button>
        <div className="text-white flex gap-6 [&>button]:border-[1px] [&>button]:border-secondary [&>button]:py-2 [&>button]:px-4 [&>button]:rounded-full [&>button]:h-min items-center">
          <button className="h-min">MI CUENTA</button>
          <button>GRABANDO</button>
        </div>
      </header>
      <main className="h-full w-[97%] bg-primary-dark self-center rounded-3xl">

      </main>
    </section>
  )
}
export default Home