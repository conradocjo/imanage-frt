"use client";

import { updateVaults } from "../services/VaultService";



export default function ModalEditar(props: any) {

    async function gravar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const data = {
            vaultId: formData.get("vaultId"),
            system: formData.get("system"),
            password: formData.get("password")
        }

        const response = updateVaults(props.token,data);
        console.log(response)
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
                            onChange={(event)=>this.inputChangedHandler(event)}
                            value={props.id} />

                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="system"
                            onChange={(event)=>this.inputChangedHandler(event)}
                            value={props.system} />
                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="password"
                            onChange={(event)=>this.inputChangedHandler(event)}
                            value={props.password} />

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
