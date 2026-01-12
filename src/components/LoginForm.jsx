import { useForm } from 'react-hook-form'

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    }= useForm({
        defaultValues: {
            email: "usuario@ejemplo.com",
            password: "123456"
        },
    });

    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
    };

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z]{2,}$/i,
                    message: "Formato de email inválido",
                },
            })}
            />
            {errors.email && <p style={{ color: red }}>{errors.email.message}</p>}
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password", {
                required: "la contraseña es obligatoria",
                minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                },
            })}
            />
            {errors.password && <p style={{ color: red }}>{errors.password.message}</p>}
        </div>

        <button type="submit">Login</button>
    </form>
);
}

