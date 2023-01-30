import { useArgs } from '@storybook/client-api'
import { EditableList } from '../EditableList'
import { EditableListItem } from '../EditableListItem'

export default {
    component: EditableList,
    title: 'molecules/EditableList',
    subcomponents: {
        EditableListItem
    }
}

export const Basic = args => {
    const [_, updateArgs] = useArgs();

    return (
        <EditableList
            items={args.items}
            onUpdateItems={updatedItems => updateArgs({ items: updatedItems })}
        />
    )
}

Basic.args = {
    items: ['Item1', 'Item2', 'Item3'],
}