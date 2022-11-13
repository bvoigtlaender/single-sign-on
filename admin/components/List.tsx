import React, { useState } from 'react'
import { ListItemProps } from './ListItem'

type Props = {
  endpoint: string,
  ItemComponent: React.FC<ListItemProps>
}

export default function List({ endpoint, ItemComponent }: Props) {
  const [items, setItems] = useState<[]>([])

  const onDelete = () => {

  }

  return <div>
  </div>
}