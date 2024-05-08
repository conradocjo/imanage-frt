export async function signIn(userName: any, password: any) {

    const response = await fetch(process.env.NEXT_PUBLIC_VAULT_SERVICE_URL + "/v1/users/sign-in",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    userName: userName,
                    password: password
                }
            )
        }
    ).then(response => {
        return response.json();
    }).catch(erro => {
        return null
    });
    return response;
}