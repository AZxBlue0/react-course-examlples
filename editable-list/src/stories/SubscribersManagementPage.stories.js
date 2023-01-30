import { SubscribersManagementPage } from '../SubscribersManagementPage'
import { EditableList } from '../EditableList'
export default {
    component: SubscribersManagementPage,
    title: 'organisms/SubscriberManagementPage',
    subcomponents: {
        EditableList
    }
}

export const Basic = args => {
    return (
        <SubscribersManagementPage />
    )
}