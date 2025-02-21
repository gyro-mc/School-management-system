import React from "react";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import Image from "next/image";
const fullConfig = resolveConfig(tailwindConfig);
function Navbar() {
  return (
    <div className=" h-auto p-1 flex-row flex items-center w-[100%] px-4 justify-end md:justify-between bg-white ">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent "
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <IconButton>
          <MessageIcon sx={{ color: "#83888E" }} />
        </IconButton>
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneIcon
            sx={{ color: fullConfig.theme.colors.buttons }}
          />
        </Badge>
        <div className="md:flex flex-col text-xs font-medium hidden lg:block">
          <h3>Adolf hitler</h3>
          <span className="opacity-[0.5] text-[10px]">Admin</span>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
