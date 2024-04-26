"use client";

import {signIn} from "next-auth/react"

const Login = () => {


    async function logar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(formData.get("user"))
        console.log(formData.get("password"))
    }

    return (
        <>
            <form onSubmit={logar}
                className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center flex-col gap-2">
                <h2 className="font-bold text-xl mb-3 text-slate-800">Bem vindo ao IManage</h2>
                <input
                    type="text"
                    name="user"
                    placeholder="Usuario"
                    className="input input-primary bg-white text-slate-800" />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="input input-primary bg-white text-slate-800" />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    );

}

export default Login;