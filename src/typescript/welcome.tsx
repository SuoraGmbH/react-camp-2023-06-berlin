import React from 'react';
interface Props {
    city: string;
}

const Welcome: React.FunctionComponent<Props> = ({ city }) => {
    return <h1>Hello {city}</h1>;
}

const element = <Welcome city="Wolfsburg" />;


