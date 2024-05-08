import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "../../../services/LoginService";

const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
                let login = await signIn(credentials?.username, credentials?.password)
                    .then(response => { return response })

                return login != null ? {
                    id: '1',
                    name: login.token

                } : null
            }
        })
    ]
})

export { handler as GET, handler as POST };

