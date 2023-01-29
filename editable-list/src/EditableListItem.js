import { useState } from "react"
import { Button } from './Button'
import { TextInput } from './TextInput'
import { ListItemContainer } from './ListItemContainer'
import { NormalText } from './NormalText'

export const EditableListItem = ({ value }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    return (
        <ListItemContainer>
            {isEditing ?
                <TextInput style= {{flex: 1}} autoFocus value={editedValue} onChange={e => setEditedValue(e.target.value)} /> :
                <NormalText style= {{flex: 1}} >{editedValue}</NormalText>
            }
            {isEditing
                ? (
                    <Button filled="true" text='Save' onClick={() => { setIsEditing(false) }} />
                ) : (
                    <Button filled="true" text='Edit' onClick={() => { setIsEditing(true) }} />
                )

            }
        </ListItemContainer>

    )
}