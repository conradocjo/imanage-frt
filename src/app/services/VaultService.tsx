interface IVault {
    system: String,
    password: String,
    creationDate: String,
    updateDate: String,
    id: String
}

export async function getVaults(token: any): Promise<IVault[]> {

    const response = await fetch("http://192.168.1.30:8080/v1/vault/get-vaults",
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
            },
        }

    ).then(response => {
        return response.json();
    }).catch(erro => {
        console.log(erro)
        return null;
    })
    return response;
}