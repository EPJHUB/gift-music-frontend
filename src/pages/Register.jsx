import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";
import { axiosMusic } from "../utils/configAxios";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    axiosMusic.post("/api/auth/register", data)
      .then(() => {
        alert("Usuario creado correctamente");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerAuth>
      <div className="w-1/2 h-full hidden sm:block">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src="img/register-img.jpg"
          alt=""
        />
      </div>
      <main className="w-full sm:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="h-full grid content-between [&>label>span]:text-[16px] [&>label>span]:font-public-sans [&>label]:grid [&>label>input]:border-b-[1px] [&>label>input]:border-secondary [&>label>input]:text-xl"
          action=""
        >
          <h2 className="text-3xl">CUENTA NUEVA</h2>
          <label className="gap-10">
            <span className="text-white/60">Email</span>
            <input
              className="bg-transparent"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="gap-10">
            <span className="text-white/60">Nombre de usuario</span>
            <input
              className="bg-transparent"
              type="text"
              name="name"
              required
            />
          </label>
          <label className="gap-10">
            <span className="text-white/60">Contraseña</span>
            <input
              className="bg-transparent"
              type="password"
              name="password"
              required
            />
          </label>
          <div className="grid gap-5 justify-center mt-8 mb-8">
            <button className="max-w-max px-14 p-1 rounded-full bg-primary-light text-white text-[16px] shadow-lg shadow-purple-400/30 hover:shadow-xl hover:shadow-purple-400/30 hover:tracking-wider transition-all">
              CREAR
            </button>
            <Link
              to={"/login"}
              className="justify-self-center text-white/60 underline text-sm"
            >
              O iniciar sesión
            </Link>
          </div>
        </form>
      </main>
    </ContainerAuth>
  );
};
export default Register;
