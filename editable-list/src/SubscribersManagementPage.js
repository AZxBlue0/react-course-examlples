import { EditableList } from './EditableList'
import { useState } from 'react'
import { NewListItemButton } from './NewListItemButton';

export const SubscribersManagementPage = () => {
    const [items, setItems] = useState([]);
    return (
        <>
            <EditableList items={items} onUpdateItems={updatedItems => setItems(updatedItems)} />
            <NewListItemButton onAdd={newItem => setItems(items.concat(newItem))} />
        </>
    )
}