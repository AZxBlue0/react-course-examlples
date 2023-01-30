import { useState } from "react"
import { Button } from './Button'
import { TextInput } from './TextInput'
import { ListItemContainer } from './ListItemContainer'
import { NormalText } from './NormalText'
import { useEffect } from "react"
import { TransparentBackground } from "./TransparentBackground"

export const EditableListItem = ({ id, value, onUpdate = () => { }, onDelete = () => { } }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    useEffect(() => {
        setEditedValue(value);
    }, [value])
    return (
        <>
            {isEditing && <TransparentBackground onClick={() => { setIsDeleting(false); setIsEditing(false); setEditedValue(value); }}/>}

                <ListItemContainer>
                    {isEditing ?
                        <TextInput style={{ flex: 1, zIndex: 2 }} autoFocus value={editedValue} onChange={e => setEditedValue(e.target.value)} /> :
                        <NormalText style={{ flex: 1 }} >{value}</NormalText>
                    }
                    {isEditing
                        ? (
                            <Button style={{ zIndex: 2 }} filled="true" text='Save' onClick={() => { onUpdate(id, editedValue); setIsEditing(false) }} />
                        ) : (
                            <Button filled="true" text='Edit' onClick={() => { setIsEditing(true) }} />
                        )

                    }
                    {isDeleting ?
                        (<Button filled="true" text='Are you shure?' onClick={() => { onDelete(id); setIsDeleting(false) }} />) :
                        (<Button filled="true" text='Delete?' onClick={() => setIsDeleting(true)} />)

                    }
                </ListItemContainer>
        </>
    )
}