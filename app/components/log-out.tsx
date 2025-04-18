import { handleAuth } from "../actions/handle-auth";

export default async function Logout() {

  return (
    <form action={handleAuth}>
      <button
        type="submit"
        className="border rouded-md px-2"
        >
          Logout
        </button>
    </form>
  );
} 