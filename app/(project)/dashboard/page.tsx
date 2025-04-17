import Logout from "@/app/components/log-out";
import { auth } from "@/app/lib/auth"
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Protected dashboard</h1>
      <h2>{session?.user?.email ? session.user.email : "Usuário não está logado!"}</h2>
      <Logout />
    </div>
  )
}
