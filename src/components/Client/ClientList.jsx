import { ClientCard } from "./ClientCard";
import { useTable } from "react-table";
import clientFakeDb from "./clientFakeDb.json";

export const ClientList = () => {
  return (
    <>
      <ClientCard></ClientCard>
      <div>ClientList</div>
    </>
  );
};
