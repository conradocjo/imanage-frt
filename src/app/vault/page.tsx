
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LogoutButton from "../components/Logout"
import { getVaults } from "../services/VaultService"


export default async function Page() {
    const session = await getServerSession()

    if (!session) {
        redirect("/")
    }



    const response = await getVaults(session.user?.name)
        .then(response => {
            return response
        })

    console.log(response)

    const vaults: any[] = [];

    response.map((x) => {
        vaults.push(<tr>
            <td>{x.id}</td>
            <td>{x.system}</td>
            <td>{x.password}</td>
            <td>{x.creationDate}</td>
            <td>{x.updateDate}</td>
        </tr>
        )
    })



    return <>
        <div className="overflow-x-auto ">
            <table className="table table-xs">
                <tr>
                    <th>ID</th>
                    <th>Sistema</th>
                    <th>Senha</th>
                    <th>Data de Criação</th>
                    <th>Data de atualização</th>
                </tr>
                {vaults}
            </table>

        </div>
        <div className="botao">
            <LogoutButton />
        </div>

    </>
}