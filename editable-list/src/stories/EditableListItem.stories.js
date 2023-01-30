import { EditableListItem } from "../EditableListItem";
import { Button } from '../Button'
import { TextInput } from '../TextInput'
import { ListItemContainer } from '../ListItemContainer'
import { NormalText } from '../NormalText'
import { useArgs } from '@storybook/client-api'
import { TransparentBackground } from "../TransparentBackground";

export default {
    component: EditableListItem,
    title: 'molecules/EditableListItem',
    subcomponents: {
        Button,
        TextInput,
        ListItemContainer,
        NormalText,
        TransparentBackground,
    }
}

export const Basic = args => {
    const [_, updateArgs] = useArgs();


    return (
        <EditableListItem {...args}
            onUpdate={(id, value) => updateArgs({ value })}
            onDelete={(id) => alert(`Deleting ${id}`)} />
    )
}
Basic.args = {
    value: 'SomeText',
    id: 0
};