import { Divider } from "../../components/divider";
import { Link } from "../../components/link";
import { Text } from "../../components/text";

export function Home() {
  return (
    <div>
      <Text className="mt-32 text-2xl text-center">
        Welcome to another new starter web app!
      </Text>
      <Text className="mt-6 text-6xl text-center">🎋</Text>

      <Divider className="my-12" />

      <Text>
        Public page wit CRUD :{" "}
        <Link href="/bats" className="underline hover:no-underline">
          /bats
        </Link>
      </Text>

      <Text>
        Protected page after sign in :{" "}
        <Link href="/auth" className="underline hover:no-underline">
          /auth
        </Link>
      </Text>
    </div>
  );
}
