import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
// import EmailProvider from "next-auth/providers/email"
import axios from "axios";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log("11111111111");
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            identifier: credentials.email,
            password: credentials.password,
          }
        );
        if (user) {
          console.log("22222222222222222");
          console.log("++++++++++++++++", user);
          return user;
        } else {
          console.log("333333333333333");
          return null;
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    */
  ],

  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        console.log("USER: ", user.data.user);
        token.token = user.token;
        token.email = user.data.user.email;
        token.name = user.data.user.username;
      } else {
      }
      return token;
    },

    async session(session, token) {
      console.log("SESSION: ", session);
      return session;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
