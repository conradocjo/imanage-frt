"use client";

import { updateVaults } from "../services/VaultService";



export default function ModalEditar(props: any) {

    async function gravar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)


        const data = {
            vaultId: props.id,
            system: formData.get("system") != null && formData.get("system") != '' ? formData.get("system") : props.system,
            password: formData.get("password") != null && formData.get("password") != '' ? formData.get("password") : atob(atob(props.password).substring(8,props.password.length))
        }


        const response = updateVaults(props.token, data)
            .then(x=>alert('Registro atualizado com sucesso.'))
            .then(x => window.location.reload());


    }

    return <>



        <a href="#" className="text-green-600" onClick={() => {
            if (document) {
                (document.getElementById('confirm_edition' + props.id) as HTMLFormElement).showModal();
            }
        }}>Editar</a>
        <dialog id={'confirm_edition' + props.id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-3xl text-slate-400">Editar Vault</h3>

                <div className="modal-action">
                    <form method="dialog"
                        onSubmit={gravar}
                        className="p-10 
                    w-96  w-full flex justify-center 
                    flex flex-col  gap-2">

                        <input id="vaultId" disabled type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-white"
                            name="vaultId"
                            onChange={(event) => this.inputChangedHandler(event)}
                            value={props.id} />

                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="system"
                            placeholder={props.system}
                        />
                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="password"
                            placeholder={props.password}
                        />

                        <div className="flex flex-row justify-center">
                            <button className="bg-slate-400
                             text-black hover:text-slate-400 
                             btn m-1"
                                type="submit">Salvar</button>
                            <button className="bg-slate-400
                             text-black 
                             hover:text-slate-400 
                             btn m-1" type="button" onClick={() => {
                                    if (document) {
                                        (document.getElementById('confirm_edition' + props.id) as HTMLFormElement).close();
                                    }
                                }}>Fechar</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    </>


}
