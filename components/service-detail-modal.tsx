"use client"

import type React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ServiceDetailModalProps {
  title: string
  description: string
  children: React.ReactNode
  trigger: React.ReactNode
}

export default function ServiceDetailModal({ title, description, children, trigger }: ServiceDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-md border border-primary/20 dialog-content">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

