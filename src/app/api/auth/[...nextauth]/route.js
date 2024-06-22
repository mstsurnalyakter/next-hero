import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Enter Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          console.log(currentUser);

          // const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.email) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};


const handler = NextAuth(authOptions);


const users = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    type: "admin",
    password: "password123",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    type: "moderator",
    password: "securePass!45",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    type: "member",
    password: "charlie2024",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    type: "member",
    password: "david*password",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve.davis@example.com",
    type: "member",
    password: "eveDavis#789",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    type: "member",
    password: "frank2024pass",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    type: "member",
    password: "graceLee!123",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    name: "Hank Martinez",
    email: "hank.martinez@example.com",
    type: "member",
    password: "hankMartinez$56",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    name: "Ivy Thomas",
    email: "ivy.thomas@example.com",
    type: "member",
    password: "ivyT#2024",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    name: "Jack White",
    email: "jack.white@example.com",
    type: "member",
    password: "jackWhite@123",
    image: "https://picsum.photos/200/300",
  },
];


export { handler as GET, handler as POST};