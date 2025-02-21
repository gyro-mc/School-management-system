import React from "react";
import { Badge } from "./ui/badge";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function UserCard({ type }: { type: string }) {
  return (
    <div className=" flex-1 h-[140px] p-3 odd:bg-lamaPurple even:bg-lamaYellow rounded-2xl">
      <div className=" justify-between flex items-center">
        <Badge variant="secondary" className="h-6">2024/25</Badge>
        <IconButton aria-label="more">
          <MoreHorizIcon sx={{color:"white"}}/>
        </IconButton>
      </div>
      <h1 className="py-2 font-bold text-2xl">1,234</h1>
      <h4 className="opacity-[0.5] text-sm">{type}</h4>
      
    </div>
  );
}

export default UserCard;
