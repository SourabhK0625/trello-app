"use client";
import React from "react";
import { Button } from "../../../../ShadcnComponents/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../ShadcnComponents/ui/dialog";
import { cva } from "class-variance-authority";
import { cn } from "../../../../lib/utils";

const ViewModal = ({ open, onOpenChange, data }) => {
  const dialogVariants = cva(
    "flex flex-col gap-2 items-center justify-center  mt-3 p-5 border-l-2 ",
    {
      variants: {
        dialogVariant: {
          info: "bg-blue-100 border-blue-600",
        },
      },
    }
  );
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Details</DialogTitle>
        </DialogHeader>
        <div className={cn(dialogVariants({ dialogVariant: "info" }))}>
          {data ? (
            <div className="w-full">
              <div>
                <span className="font-bold">Title: </span>
                <span className="mx-2">{data?.name}</span>
              </div>
              <div>
                <span className="font-bold">Description: </span>
                <span className="mx-2">{data?.description}</span>
              </div>
              <div>
                <span className="font-bold">Created At: </span>
                <span className="mx-2">{data?.createdAt}</span>
              </div>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
        <DialogFooter className="flex items-center gap-2">
          <Button onClick={onOpenChange} size="sm">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewModal;
