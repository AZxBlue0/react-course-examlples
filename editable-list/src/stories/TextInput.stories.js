import { TextInput } from "../TextInput";

export default {
    component: TextInput,
    title: 'atoms/TextInput'
}


const Template = args => <TextInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    placeholder: 'Enter some text',
    focusColor: 'none',
    fullWidth: false
    
}

