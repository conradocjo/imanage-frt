

interface IVault {
    system: String,
    password: String,
    creationDate: String,
    updateDate: String,
    id: String
}

const env = process.env.BACK_URL;

export async function getVaults(token: any): Promise<IVault[]> {

    console.log(env + '/v1/vault/get-vaults')

    const response = await fetch('http://localhost:8080' + '/v1/vault' + "/get-vaults",
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
    console.log('http://localhost:8080/v1/vault/new-pass')
    const response = await fetch('http://localhost:8080/v1/vault/new-pass',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
                'system': vault.system,
                'password': vault.password
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
    console.log('http://localhost:8080/v1/vault/update-vaults')
    const response = await fetch('http://localhost:8080/v1/vault/update-vaults',
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token,
                'system': vault.system,
                'password': vault.password,
                'vaultId': vault.id
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