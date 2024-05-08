
interface IVault {
    system: String,
    password: String,
    creationDate: String,
    updateDate: String,
    id: String
}

const env = process.env.NEXT_PUBLIC_VAULT_SERVICE_URL;

export async function getVaults(token: any): Promise<IVault[]> {

    console.log(`${env}/v1/vault/get-vaults`)

    const response = await fetch(`${env}/v1/vault/get-vaults`,
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

export async function newVault(token: any, vault: any): Promise<string> {


    console.log(vault)
    console.log(token)
    console.log(`${env}/v1/vault/new-pass`)
    const response = await fetch(`${env}/v1/vault/new-pass`,
        {
            method: 'POST',
            headers: {
                'system': vault.system,
                'password': vault.password,
                'Content-type': 'application/json',
                'Authorization': token,
            }
        }
    ).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error)
        return null;
    })

    return response;

}

export async function updateVaults(token: any, vault: any): Promise<string> {

    console.log(vault)
    console.log(token)
    console.log(`${env}/v1/vault/update-vaults`)
    const response = await fetch(`${env}/v1/vault/update-vaults`,
        {
            method: 'PUT',
            headers: {
                'system': vault.system,
                'password': vault.password,
                'vaultId': vault.vaultId,
                'Content-type': 'application/json',
                'Authorization': token,
            },
        }
    ).then(response => {
        return response.json();
    }).catch(error => {
        console.log(error)
        return null;
    })
    return response;

}