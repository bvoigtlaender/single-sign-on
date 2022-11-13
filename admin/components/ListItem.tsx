import React from 'react'

export type ListItemProps = {
  id: Number,
  onDelete: Function,
  reload: Function
}

export default function ListItem({ id, onDelete, reload }: ListItemProps) {
  return (
    <div>ListItem</div>
  )
}
