export async function signIn(userName: any, password: any) {
    const response = await fetch("http://192.168.1.30:8080/v1/users/sign-in",
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