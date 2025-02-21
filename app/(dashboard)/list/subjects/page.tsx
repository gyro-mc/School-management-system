import DataTable from "@/components/Table";
import React from "react";

function Page() {
  return (
    <DataTable
      data={[
        {
          Subject_name: "math",
          teachers: "555-1234",
        },
        {
          Subject_name: "spanish",
          teachers: "dsf",
        },
      ]}
    />
  );
}

export default Page;
