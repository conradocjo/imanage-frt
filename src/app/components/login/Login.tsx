
const Login = () => {

    return (
        <div className="h-screen flex justify-center items-center bg-black-800 px-5">
            <div className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center flex-col gap-2">
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

            </div>

        </div>
    );

}

export default Login;