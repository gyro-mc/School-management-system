import DataTable from "@/components/Table";
import React from "react";

function Page() {
  return (
    <DataTable
      data={[
        {
          Info: "John Doe",
          Student_Names: "T001",
          Phone: "555-1234",
          Address: "123 Main St",
        },
        {
          Info: "nigga",
          Student_Names: "sdf",
          Phone: "dsf",
          Address: "df",
        },
      ]}
    />
  );
}

export default Page;
