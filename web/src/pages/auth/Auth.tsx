import { useState } from "react";
import { Button } from "../../components/button";
import { Field, Label } from "../../components/fieldset";
import { Heading } from "../../components/heading";
import { Input } from "../../components/input";
import { useSignIn } from "./use-sign-in";
import { Badge } from "../../components/badge";
import { Text } from "../../components/text";
import { useSignOut } from "./use-sign-out";

export function Auth() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Heading level={1} className="mb-4 text-2xl">
          Login
        </Heading>
        <LoginForm />
        <Logout />
      </div>
    </>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("gugu@example.com");
  const [password, setPassword] = useState("supersecret");

  const { mutageSignIn } = useSignIn();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutageSignIn.mutate({ email, password });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-xl bg-white p-8 shadow  border flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <Heading level={2} className="text-lg text-center">
          Sign in
        </Heading>
        {mutageSignIn.isError && (
          <Badge color="red">{mutageSignIn.error.message}</Badge>
        )}
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(x) => setEmail(x.currentTarget.value)}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              type="password"
              required
              value={password}
              onChange={(x) => setPassword(x.currentTarget.value)}
            />
          </Field>
          <Button
            type="submit"
            className="mt-4"
            disabled={mutageSignIn.isPending}
          >
            Sign in
          </Button>
        </form>
      </div>
      {mutageSignIn.isSuccess && (
        <Text className="text-xs bg-green-500/30 text-black p-2 rounded-xl">
          <div>
            Token : {mutageSignIn.data.data.accessToken.slice(0, 60)}...
          </div>
          <div>User : {JSON.stringify(mutageSignIn.data.data.user)}</div>
        </Text>
      )}
    </div>
  );
}

function Logout() {
  const { clearToken } = useSignOut();
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-xl bg-white p-8 shadow  border flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <Button onClick={() => clearToken()}>Sign out</Button>
      </div>
    </div>
  );
}
