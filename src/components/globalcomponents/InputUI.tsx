import { Input } from '@material-tailwind/react';
import React from 'react';
import TextUI, { AddTextUI } from './TextUI';



const InputUI = ({ placeholder = '', label = "", ...rest }) => {
    return (
        <>
            <AddTextUI label={label} />
            <Input
                size="lg"
                placeholder={placeholder}
                labelProps={{
                    className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                {...rest}
            />
        </>
    );
}

export const InputEmailUI = ({ label = "", ...rest }) => {
    return (
        <>
            <AddTextUI label={label} />
            <Input
                size="lg"
                placeholder="emma@mail.com"
                labelProps={{
                    className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                {...rest}
            />
        </>
    );
}

export const InputNumberUI = ({ placeholder = '0', label="", ...rest }) => {
    return (
        <>
            <AddTextUI label={label} />
            <Input
                size="lg"
                placeholder={placeholder}
                labelProps={{
                    className: "hidden",
                }}
                type="number"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                {...rest}
            />
        </>
    );
}

export default InputUI;
