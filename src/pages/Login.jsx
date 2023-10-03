import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "../lib/axios";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

const errorMessages = {
  required: "Este campo es requerido",
};

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/auth", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;
      const name = response?.data?.name;
      localStorage.setItem("name", name);
      setAuth({ role, accessToken, name });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: errorMessages.required })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: errorMessages.required })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Submit</button>
        <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={togglePersist}
            checked={persist}
          />
          <label htmlFor="persist">Trust This Device</label>
        </div>
      </form>
    </>
  );
};

export default Login;
