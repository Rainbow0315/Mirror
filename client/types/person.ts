export interface Gift {
  type: "given" | "received"
  item: string
  date: Date
}

export interface Person {
  id: string
  name: string
  relationship: string
  location: string
  lastInteraction: Date
  interactionType: string
  notes: string[]
  tags: string[]
  likes: string[]
  dislikes: string[]
  gifts: Gift[]
  avatar: string
}
