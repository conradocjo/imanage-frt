
interface IVault {
    system: string,
    password: string,
    creationDate: string,
    updateDate: string,
    id: string
}

const env = process.env.NEXT_PUBLIC_VAULT_SERVICE_URL;

export async function getVaults(token: any): Promise<IVault[]> {


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
        return null;
    })
    return response;
}

export async function newVault(token: any, vault: any): Promise<string> {


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
        return null;
    })
    return response;

}

export async function updateVaults(token: any, vault: any): Promise<any> {

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
        return null;
    })

}