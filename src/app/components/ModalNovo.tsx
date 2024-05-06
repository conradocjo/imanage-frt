"use client";

import { newVault } from "../services/VaultService";



export default function ModalNovo(props: any) {

    async function gravar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const data = {
            system: formData.get("system") != null && formData.get("system") != '' ? formData.get("system") : props.system,
            password: formData.get("password") != null && formData.get("password") != '' ? formData.get("password") : props.password
        }

        console.log(data)

        const response = newVault(props.token, data);
        console.log(response)
    }

    return <>



        <button onClick={() => {
            if (document) {
                (document.getElementById('confirm_new' + props.id) as HTMLFormElement).showModal();
            }
        }} className="btn btn-neutral justify-center" >+</button>


        <dialog id={'confirm_new' + props.id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-3xl text-slate-400">Adicionar Vault</h3>

                <div className="modal-action">
                    <form method="dialog"
                        onSubmit={gravar}
                        className="p-10 
                    w-96  w-full flex justify-center 
                    flex flex-col  gap-2">

                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="system"
                            placeholder='Sistema'
                        />
                        <input type="text"
                            className="rounded-sm 
                        bg-white input 
                        text-slate-950"
                            name="password"
                            placeholder='Senha'
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
                                        (document.getElementById('confirm_new' + props.id) as HTMLFormElement).close();
                                    }
                                }}>Fechar</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    </>


}