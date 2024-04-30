const ContainerAuth = ({children}) => {
  return (
    <section className="h-screen w-full grid justify-center items-center bg-black text-white bg-[url(/img/bg-gradiant-mobile.png)] bg-no-repeat bg-cover">
    <article className="w-[90vw] h-3/4 flex flex-row justify-center gap-10 md:gap-20 max-h-[90vh]">
        {children}
    </article>
    </section>
  )
}
export default ContainerAuth