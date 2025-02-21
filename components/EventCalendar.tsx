//"user client";
//import React, { useState } from "react";
//import { Calendar } from "./ui/calendar";
//import { IconButton } from "@mui/material";
//import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//
//function EventCalendar() {
//  const [date, setDate] = useState<Date | undefined>(new Date());
//  return (
//    <div className=" bg-white">
//      <Calendar
//        mode="single"
//        selected={date}
//        onSelect={setDate}
//        className="rounded-md border"
//      />
//      <div>
//        <div className="flex flex-row justify-between items-center p-4">
//          <h1 className="font-bold text-xl">Events</h1>
//          <IconButton>
//            <MoreHorizIcon />
//          </IconButton>
//        </div>
//        <div className="p-4 flex flex-col gap-5">
//          <div className="rounded-xl border-t-4 border  p-3 even:border-t-lamaPurple odd:border-t-lamaSky">
//            <div className="flex flex-row justify-between items-center">
//              <h1 className="font-medium text-lg">Lorem ipsum dolor</h1>
//              <h4 className="opacity-[0.5] ">2:00 PM - 2:00 PM</h4>
//            </div>
//            <p className="py-4 opacity-[0.5]">
//              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//            </p>
//          </div>
//          <div className="rounded-xl border-t-4 border  p-3 even:border-t-lamaPurple odd:border-t-lamaSky">
//            <div className="flex flex-row justify-between items-center">
//              <h1 className="font-medium text-lg">Lorem ipsum dolor</h1>
//              <h4 className="opacity-[0.5] ">2:00 PM - 2:00 PM</h4>
//            </div>
//            <p className="py-4 opacity-[0.5]">
//              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//            </p>
//          </div>
//          <div className="rounded-xl border-t-4 border  p-3 even:border-t-lamaPurple odd:border-t-lamaSky">
//            <div className="flex flex-row justify-between items-center">
//              <h1 className="font-medium text-lg">Lorem ipsum dolor</h1>
//              <h4 className="opacity-[0.5] ">2:00 PM - 2:00 PM</h4>
//            </div>
//            <p className="py-4 opacity-[0.5]">
//              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//            </p>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//}
//
//export default EventCalendar;
//