import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import TextUI, { AddTextUI } from './TextUI';



const SelectUI = ({ label='', ...rest }) => {
    return (
        <>
            <AddTextUI label={label} />
            <Select
                size="lg"
                labelProps={{
                    className: "hidden",
                }}
                className="border-t-blue-gray-200 h-10 aria-[expanded=true]:border-t-primary"
            >
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
                <Option>11</Option>
            </Select>
        </>
    );
}

export default SelectUI;
