import { EditableListItem } from "../EditableListItem";

export default {
    component: EditableListItem,
    title: 'molecules/EditableListItem',
}

export const Basic = args => <EditableListItem {...args } />

Basic.args = {
    value: 'SomeText',

};