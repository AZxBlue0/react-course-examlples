import { useState } from "react"
import { ListItemContainer } from './ListItemContainer'
import { Button } from './Button'
import { TransparentBackground } from './TransparentBackground'
import { TextInput } from './TextInput'

export const NewListItemButton = ({ onAdd }) => {
    const [isActive, setIsActive] = useState(false);
    const [newItemText, setNewItemText] = useState('');

    return (
        <ListItemContainer>
            {isActive ? (
                <>
                    <TransparentBackground onClick={() => {
                        setIsActive(false)
                        setNewItemText('')
                    }} />
                    <TextInput
                        autoFocus
                        placeholder="Enter new item"
                        style={{ flex: 1, zIndex: 2 }}
                        onChange={e => setNewItemText(e.target.value)}
                        value={newItemText}
                    />
                    <Button
                        style={{ zIndex: 2 }}
                        onClick={() => {
                            onAdd(newItemText);
                            setIsActive(false);
                            setNewItemText('')
                        }
                        }
                        text='Add'
                        filled='true' />

                    <Button onClick={() => {
                        setIsActive(false)
                        setNewItemText('')
                    }} style={{ zIndex: 2 }} text='Cancel' filled='true' />

                </>
            ) : (
                <Button style={{flex:1, textAlign: 'center'}} filled ='true' onClick={() => setIsActive(true)} text="+ Add"/>
            )}
        </ListItemContainer>
    )
}