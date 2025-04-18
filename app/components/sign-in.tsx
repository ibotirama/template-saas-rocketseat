
import { signIn } from "@/app/lib/auth"
import { handleAuth } from "../actions/handle-auth"

export default function SignIn() {
  return (
    <form
      action={handleAuth}
    >
      <button
        type="submit"
        className="border rouded-md px-2 border-r-4"
      >
        Signin with Google
      </button>
    </form>
  )
} 