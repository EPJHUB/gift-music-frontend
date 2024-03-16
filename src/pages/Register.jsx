import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen w-full grid justify-center items-center">
      <article className="w-[90vw] h-3/4 flex flex-row justify-center gap-10">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            src="img/register-img.jpg"
            alt=""
          />
        </div>
        <main className="w-1/2">
          <form
            className="h-full grid content-between [&>label>span]:text-[16px] [&>label>span]:font-public-sans [&>label]:grid [&>label>input]:border-b-[1px] [&>label>input]:border-secondary"
            action=""
          >
            <h2>CUENTA NUEVA</h2>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Nombre de usuario</span>
              <input type="text" />
            </label>
            <label>
              <span>Contraseña</span>
              <input type="password" />
            </label>
            <div className="grid gap-5 justify-center">
              <button className="w-[145px] h-[35px] rounded-full bg-primary-light text-white text-[16px]">
                CREAR
              </button>
              <Link className="justify-self-center">O iniciar sesión</Link>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};
export default Register;
