"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export function NewEntryDialog() {
  const [entryType, setEntryType] = useState("note")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Entry</DialogTitle>
          <DialogDescription>Add a new note, event, or reflection to your personal dashboard.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="entry-type">Entry Type</Label>
            <Select defaultValue={entryType} onValueChange={setEntryType}>
              <SelectTrigger id="entry-type">
                <SelectValue placeholder="Select entry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="note">Note</SelectItem>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="reflection">Reflection</SelectItem>
                <SelectItem value="social">Social Interaction</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter a title" />
          </div>

          {entryType === "event" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Write your thoughts..." className="min-h-[100px]" />
          </div>

          {(entryType === "reflection" || entryType === "social") && (
            <div className="grid gap-2">
              <Label htmlFor="emotion">Emotion</Label>
              <Select>
                <SelectTrigger id="emotion">
                  <SelectValue placeholder="How are you feeling?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="reflective">Reflective</SelectItem>
                  <SelectItem value="anxious">Anxious</SelectItem>
                  <SelectItem value="excited">Excited</SelectItem>
                  <SelectItem value="tired">Tired</SelectItem>
                  <SelectItem value="grateful">Grateful</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {entryType === "social" && (
            <div className="grid gap-2">
              <Label htmlFor="people">Related People</Label>
              <Select>
                <SelectTrigger id="people">
                  <SelectValue placeholder="Select people" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sarah">Sarah Chen</SelectItem>
                  <SelectItem value="mike">Mike Johnson</SelectItem>
                  <SelectItem value="lisa">Lisa Wong</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Save Entry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
