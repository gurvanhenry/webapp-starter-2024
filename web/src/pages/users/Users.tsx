import { Heading } from "../../components/heading";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "../../components/table";
import { Text } from "../../components/text";
import { useUsers } from "./use-users";

export function Users() {
  const { queryGetUsers } = useUsers();

  const { isPending, error, data } = queryGetUsers;
  const users: User[] = data?.data?.data;

  return (
    <>
      <Heading level={1} className="mb-4">
        Users
      </Heading>
      {isPending ? (
        <Text className="">Loading...</Text>
      ) : error ? (
        <Text className="text-red-500">Error: {error.message}</Text>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>id</TableHeader>
              <TableHeader>email</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell className="text-zinc-500">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}

type User = { id: string; email: string };
