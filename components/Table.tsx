"use client";
import React from "react";
import { role } from "@/lib/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import MiniCard from "./MiniCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TableBar from "./TableBar";
import { usePathname } from 'next/navigation'
interface TableProps<T> {
  data: T[];
}

function DataTable<T extends object>({ data }: TableProps<T>) {

  const pathname = usePathname()
  const field=pathname.split("/").pop()

  if (!data || data.length === 0) {
    return <div className="text-center p-4">No data available</div>;
  }

  const headers = Object.keys(data[0]);
  return (
    <div className="flex flex-col  h-screen ">
      <TableBar props={`${field}`} />
      <Table className=" ">
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header} className="text-left">
                {header}
              </TableHead>
            ))}
            {role === "admin" ? <TableHead>action</TableHead> : null}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((cell, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="odd:bg-white hover:bg-lamaPurpleLight"
            >
              {headers.map((header, colIndex) => (
                <TableCell key={`${rowIndex}-${colIndex}`}>
                  {header === "Info" ? (
                    <MiniCard data={String(cell[header as keyof T] ?? "N/A")} />
                  ) : (
                    String(cell[header as keyof T] ?? "N/A")
                  )}
                </TableCell>
              ))}
              <TableCell className="gap-3">
                <IconButton>
                  <DeleteIcon sx={{ color: "#CFCEFF" }} />
                </IconButton>
                <IconButton>
                  <RemoveRedEyeIcon sx={{ color: "#C3EBFA" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-white  ">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default DataTable;
