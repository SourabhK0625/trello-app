"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/ShadcnComponents/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ShadcnComponents/ui/dialog";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const EditTaskCard = ({
  open,
  onOpenChange,
  secondaryButtonAction,
  dialogVariant = "info",
  data,
  handleUpdate,
}) => {
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.name || "");
      setDescription(data.description || "");
    }
  }, [data]);

  const handleUpdateClick = () => {
    const updatedCard = { ...data, name: title, description: description };
    handleUpdate(updatedCard);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update</DialogTitle>
        </DialogHeader>
        <div className={cn(dialogVariants({ dialogVariant }))}>
          <div className="mb-1 w-full">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-1 w-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows={4}
            />
          </div>
        </div>
        <DialogFooter className="flex items-center gap-2">
          <Button onClick={secondaryButtonAction} variant="secondary" size="sm">
            Cancel
          </Button>
          <Button onClick={handleUpdateClick} size="sm">
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskCard;
