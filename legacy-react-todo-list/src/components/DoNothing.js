import React from 'react';

export class DoNothing extends React.PureComponent {
    render() {
        const { name } = this.props;
        console.log('Rendering do-nothing component');
        return (
            <p>Im doing nothing comonent {name}</p>
        )
    }
}