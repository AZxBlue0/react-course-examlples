import { NormalText } from "../NormalText";

export default {
    component: NormalText,
    title: 'atoms/NormalText'
}

export const Basic = args => <NormalText {...args} />

Basic.args = {
    children: 'Hello'
}