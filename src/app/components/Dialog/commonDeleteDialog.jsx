"use client";
import React from "react";
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

const CommonDeleteDialog = ({
  open,
  onOpenChange,
  dialogVariant = "danger",
  primaryButtonLabel = "Delete",
  secondaryButtonLabel = "Cancel",
  primaryButtonSize = "sm",
  secondaryButtonSize = "sm",
  primaryButtonAction,
  secondaryButtonAction,
  header,
  title,
  truncateTitle = true,
  subtitle,
  ...rest
}) => {
  const dialogVariants = cva(
    "flex flex-col gap-2 items-center justify-center  mt-3 p-5 border-l-2 ",
    {
      variants: {
        dialogVariant: {
          danger: "bg-red-100 border-red-600",
          warning: "bg-yellow-100 border-yellow-600",
          success: "bg-green-100 border-green-600",
          info: "bg-info-light border-blue-600",
          theme: "bg-card border-muted-foreground",
        },
      },
      defaultVariants: {
        dialogVariant: "danger",
      },
    }
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <div className={cn(dialogVariants({ dialogVariant }))}>
          <div
            style={{ wordBreak: "break-word" }}
            className={cn("text-center text-base font-medium ", {
              "line-clamp-2": truncateTitle,
            })}
          >
            {title}
          </div>
          <div className="text-center text-xs">
            {!!subtitle ? subtitle : ""}
          </div>
        </div>
        <DialogFooter className="flex items-center gap-2">
          <Button
            onClick={secondaryButtonAction}
            variant="secondary"
            type="submit"
            size={secondaryButtonSize}
            disabled={rest?.loading}
          >
            {secondaryButtonLabel}
          </Button>
          <Button
            size={primaryButtonSize}
            onClick={primaryButtonAction}
            {...rest}
          >
            {primaryButtonLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommonDeleteDialog;
