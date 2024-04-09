import { Typography } from '@material-tailwind/react';
import React from 'react';

const TextUI = ({ label = '', className="mb-2 font-medium" }) => {
    return (
        <Typography
            variant="small"
            color="blue-gray"
            className={className}
        >
            {label}
        </Typography>
    );
}

export const AddTextUI = ({ label }) => label && <TextUI label={label} />


export default TextUI;
