import React from "react";

function Announcements() {
  return (
    <div className="mt-3 bg-white p-3 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center py-4">
        <h1 className="font-bold text-xl">Announcements</h1>
        <span className="text-sm opacity-[0.5] ">View all</span>
      </div>
      <div className="border rounded-xl p-4 bg-lamaPurpleLight">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-base font-bold pb-3">Lorem ipsum dolor sit</h1>
          <span className="border rounded-sm bg-white p-[2px] text-sm opacity-[0.7]">
            2025-01-01
          </span>
        </div>
        <p className="opacity-[0.5] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
      <div className="border rounded-xl p-4 bg-lamaYellowLight">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-base font-bold pb-3">Lorem ipsum dolor sit</h1>
          <span className="border rounded-sm bg-white p-[2px] text-sm opacity-[0.7]">
            2025-01-01
          </span>
        </div>
        <p className="opacity-[0.5] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
      <div className="border rounded-xl p-4 bg-lamaSkyLight">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-base font-bold pb-3">Lorem ipsum dolor sit</h1>
          <span className="border rounded-sm bg-white p-[2px] text-sm opacity-[0.7]">
            2025-01-01
          </span>
        </div>
        <p className="opacity-[0.5] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          expedita. Rerum, quidem facilis?
        </p>
      </div>
    </div>
  );
}

export default Announcements;
