"use client"
import React, { useState} from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import SearchIcon from "@mui/icons-material/Search";

function TableBar({ props }: { props: string }) {
  const [mounted, setMounted] = React.useState(false);
  const [inputValue, setInputValue] = useState("");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-between p-4">
      <h1 className="font-semibold text-xl">{`All ${props}`}</h1>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            style={{
              paddingLeft: "32px",
              height: "36px",
              borderRadius: "16px",
              border: "1px solid #ccc",
            }}
          />
          <SearchIcon
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
              fontSize: "20px",
            }}
          />
        </div>
        <IconButton sx={{backgroundColor:"#FAE27C"}}>
          <CalendarViewWeekIcon />
        </IconButton >
        <IconButton sx={{backgroundColor:"#FAE27C"}}>
          <ViewListIcon />
        </IconButton>
        <IconButton sx={{backgroundColor:"#FAE27C"}}>
          <AddIcon />
        </IconButton>
      </div>
      
    </div>
  );
}

export default TableBar;
