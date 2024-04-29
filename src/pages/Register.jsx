import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen w-full grid justify-center items-center bg-black text-white bg-[url(/img/bg-gradiant-mobile.png)] bg-no-repeat bg-cover">
      <article className="w-[90vw] h-3/4 flex flex-row justify-center gap-10 md:gap-20 max-h-[90vh]">
        <div className="w-1/2 h-full hidden sm:block">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="img/register-img.jpg"
            alt=""
          />
        </div>
        <main className="w-full sm:w-1/2">
          <form
            className="h-full grid content-between [&>label>span]:text-[16px] [&>label>span]:font-public-sans [&>label]:grid [&>label>input]:border-b-[1px] [&>label>input]:border-secondary [&>label>input]:text-xl"
            action=""
          >
            <h2 className="text-3xl">CUENTA NUEVA</h2>
            <label className="gap-20">
              <span className="text-white/60">Email</span>
              <input className="bg-transparent" type="email" required/>
            </label>
            <label className="gap-20">
              <span className="text-white/60">Nombre de usuario</span>
              <input className="bg-transparent" type="text" required/>
            </label>
            <label className="gap-20">
              <span className="text-white/60">Contraseña</span>
              <input className="bg-transparent" type="password" required/>
            </label>
            <div className="grid gap-5 justify-center">
              <button className="max-w-max px-14 p-1 rounded-full bg-primary-light text-white text-[16px] shadow-lg shadow-purple-400/30 hover:shadow-xl hover:shadow-purple-400/30 hover:tracking-wider transition-all">
                CREAR
              </button>
              <Link className="justify-self-center text-white/60 underline text-sm">O iniciar sesión</Link>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};
export default Register;
