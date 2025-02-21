import DataTable from "@/components/Table";
import React from "react";

function Page() {
  return (
    <DataTable
      data={[
        {
          Info: "John Doe",
          Teacher_id: "T001",
          Subjects: "Math",
          Classes: "Grade 10",
          Phone: "555-1234",
          Address: "123 Main St",
        },
        {
          Info: "nigga",
          Teacher_id: "sdf",
          Subjects: "sf",
          Classes: "df",
          Phone: "dsf",
          Address: "df",
        },
      ]}
    />
  );
}

export default Page;
