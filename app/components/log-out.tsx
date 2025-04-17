import { handleAuth } from "../actions/handle-auth";

export default async function Logout() {

  return (
    <form action={handleAuth}>
      <button type="submit">Logout</button>
    </form>
  );
} 