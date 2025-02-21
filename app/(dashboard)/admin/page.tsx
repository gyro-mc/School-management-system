"use client"
import Announcements from "@/components/Announcements";
import { AttendanceBarChart } from "@/components/AttendanceBarChart";
import { GenderChart } from "@/components/GenderChart";
import UserCard from "@/components/UserCard";
import React from "react";
import { FinanceChart } from "@/components/FinanceChart";

function page() {
  return (
    <div className=" h-auto flex flex-row w-full ">
      {/*left*/}
      <div className="w-full lg:w-2/3 flex gap-5 flex-col">
        <div className="flex-wrap flex flex-row p-2 gap-4">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        <div className="flex  flex-col lg:flex-row gap-4 px-3 ">
          <AttendanceBarChart />
          <GenderChart />
        </div>
      <FinanceChart/>
      </div>
      <div className="w-1/3 hidden lg:block md:flex">
        {/* <EventCalendar /> */}
        <Announcements />
      </div>
    </div>
  );
}

export default page;
