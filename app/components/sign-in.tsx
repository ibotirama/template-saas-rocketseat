
import { signIn } from "@/app/lib/auth"
import { handleAuth } from "../actions/handle-auth"
 
export default function SignIn() {
  return (
    <form
      action={handleAuth}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 