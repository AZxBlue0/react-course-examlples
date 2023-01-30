import { useArgs } from '@storybook/client-api'
import { NewListItemButton } from '../NewListItemButton'
import { Button } from '../Button'
import { TransparentBackground } from '../TransparentBackground'
import { TextInput } from '../TextInput'
import { ListItemContainer } from "../ListItemContainer"

export default {
    component: NewListItemButton,
    title: 'molecules/NewListItemButton',
    subcomponents: {
        Button,
        TextInput,
        ListItemContainer,
        TransparentBackground,
    }
}

export const Basic = args => {
    return (
        <>
            <NewListItemButton {...args} onAdd={() => { }} />
        </>
    )
}

Basic.args = {

}