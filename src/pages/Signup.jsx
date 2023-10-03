import axios from "../lib/axios";
import { useForm, useController } from "react-hook-form";
import Select from "react-select";

const errorMessages = {
  required: "Este campo es requerido",
};

const roleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "Administracion", label: "Administracion" },
  { value: "Vendedor", label: "Vendedor" },
  { value: "Cliente", label: "Cliente" },
];

function Signup() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { field } = useController({ name: "role", control });

  const handleSelection = (option) => {
    field.onChange(option.value);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post("/register", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("Response was success!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("name", { required: errorMessages.required })}
      />
      {errors.nombre && <p className="error">{errors.nombre.message}</p>}

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

      <Select
        placeholder="Rol"
        value={roleOptions.find(({ value }) => value === field.value)}
        onChange={handleSelection}
        options={roleOptions}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
