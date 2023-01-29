import { Button } from '../Button';

export default {
    component: Button,
    title: 'atoms/Button'
}

const Template = args => <Button {...args} />

export const Basic = Template.bind({});

Basic.args = {
    text: 'Button text',
    filled: true,
    color: 'red'
}