import React from 'react';

const Higher = (Component: React.ComponentType<any>): React.FC<any> => {
    const HigherComponent: React.FC<any> = (props) => {
        const [state, setState] = React.useState<number>(0);

        const increment = () => {
            setState((prev) => prev + 1);
        }

        return <Component {...props} state={state} increment={increment} />;
    }

    return HigherComponent;
}

export default Higher;
