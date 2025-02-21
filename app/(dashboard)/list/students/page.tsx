import DataTable from "@/components/Table";
import React from "react";

function page() {
  return (
    <DataTable
      data={[
        {
          Info: "John Doe",
          student_id: "T001",
          Grade: "Math",
          Phone: "555-1234",
          Address: "123 Main St",
        },
        {
          Info: "nigga",
          student_id: "sdf",
          Grade: "sf",
          Phone: "dsf",
          Address: "df",
        },
      ]}
    />
  );
}

export default page;
