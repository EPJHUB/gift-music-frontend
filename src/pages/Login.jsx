import { Link } from "react-router-dom"
import ContainerAuth from "../components/layout/ContainerAuth"
import { axiosMusic } from "../utils/configAxios";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axiosMusic.post("/api/auth/login", data)
      .then(({data}) => {console.log(data)})
      .catch((err) => {console.log(err)})
  }

  return (
    <ContainerAuth>
      <div className="w-1/2 h-full hidden sm:block">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="img/login-img.jpg"
            alt=""
          />
        </div>
        <main className="w-full sm:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="h-full grid content-between [&>label>span]:text-[16px] [&>label>span]:font-public-sans [&>label]:grid [&>label>input]:border-b-[1px] [&>label>input]:border-secondary [&>label>input]:text-xl"
            action=""
          >
            <h2 className="text-3xl">INICIAR SESIÓN</h2>
            <label className="gap-10">
              <span className="text-white/60">Email</span>
              <input className="bg-transparent" type="email" name="email" required/>
            </label>
            <label className="gap-10">
              <span className="text-white/60">Contraseña</span>
              <input className="bg-transparent" type="password" name="password" required/>
            </label>
            <div className="grid gap-5 justify-center mt-8 mb-8">
              <button className="max-w-max px-14 p-1 rounded-full bg-primary-light text-white text-[16px] shadow-lg shadow-purple-400/30 hover:shadow-xl hover:shadow-purple-400/30 hover:tracking-wider transition-all">
                ENTRAR
              </button>
              <Link to={'/register'} className="justify-self-center text-white/60 underline text-sm">O crear cuenta</Link>
            </div>
          </form>
        </main>
    </ContainerAuth>
  )
}
export default Login