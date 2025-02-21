import DataTable from "@/components/Table";
import React from "react";

function Page() {
  return (
    <DataTable
      data={[
        {
          Class_name: "John Doe",
          capacity: "T001",
          grade: "555-1234",
          supervisor: "123 Main St",
        },
        {
          Class_name: "nigga",
          capacity: "sdf",
          grade: "dsf",
          supervisor: "df",
        },
      ]}
    />
  );
}

export default Page;
