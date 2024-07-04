"use client";

import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";

const Login = () => {

    // const searchParams = useSearchParams()
    // const error = searchParams.get('error')

    async function logar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        const data = {
            username: formData.get("username"),
            password: formData.get("password")
        }

        signIn("credentials",
            {
                ...data,
                callbackUrl: "/vault"
            }
        )
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-black-800 px-5">
                <form onSubmit={logar}
                    className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center flex-col gap-2">
                    <h2 className="font-bold text-xl mb-3 text-slate-800">Bem vindo ao IManage</h2>
                    <input
                        type="text"
                        name="username"
                        placeholder="Usuario"
                        className="input input-primary bg-white text-slate-800" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        className="input input-primary bg-white text-slate-800" />
                    <button type="submit" className="btn btn-primary">Login</button>
                    {/* <Suspense fallback={error === 'CredentialsSignin' && <div className="text-red-500 flexjustify-center">Erro no login.</div>}></Suspense> */}
                </form>
            </div>

        </>
    );

}

export default Login;