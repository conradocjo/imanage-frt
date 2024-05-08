
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Header from "../components/Header"
import { getVaults } from "../services/VaultService"
import ModalEditar from "../components/ModalEditar"
import ModalNovo from "../components/ModalNovo"


const env = process.env.VAULT_SERVICE_URL;

export default async function Page() {
    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }



    const response = await getVaults(session.user?.name)
        .then(response => {
            return response
        })


    const vaults: any[] = [];

    response.map((x, index) => {
        vaults.push(
            <tr key={index} className="hover:bg-slate-200 text-center">
                <td className="">{x.id}</td>
                <td className="">{x.system}</td>
                <td className="text-white hover:text-black">{atob(atob(x.password).substring(8,x.password.length))}</td>
                <td className="">{x.creationDate}</td>
                <td className="">{x.updateDate}</td>
                <td className="">
                    <ModalEditar
                        id={x.id}
                        system={x.system}
                        password={x.password}
                        token={session.user?.name}
                    />
                </td>
                <td className="">Excluir</td>
            </tr>
        )
    })


    return <>
        <div className=" overflow-x-auto h-screen  bg-white ">
            <Header />
            <br />


            <div className="bg-black-800  
                w-100 justify-center items-center
                max-w-full flex ">

                <table className="table table-pin-rows  text-black border border-slate-600  w-5/6 overflow-x-auto">
                    <thead>
                        <tr className="text-black ">
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500"><ModalNovo token={session.user?.name} />    </th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Sistema</th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Senha</th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Data de Criação</th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Data de atualização</th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Editar</th>
                            <th className="text-center bg-slate-400 border border-r-0 border-l-0 border-b-4 border-slate-500">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vaults}
                    </tbody>
                </table>

            </div>


        </div>

    </>
}