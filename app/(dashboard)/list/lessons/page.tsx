import DataTable from "@/components/Table";
import React from "react";

function Page() {
  return (
    <DataTable
      data={[
        {
          subject_name: "John Doe",
          class: "T001",
          teacher: "555-1234",
          actions: "123 Main St",
        },
        {
          subject_name: "nigga",
          class: "sdf",
          teacher: "dsf",
          actions: "df",
        },
      ]}
    />
  );
}

export default Page;
