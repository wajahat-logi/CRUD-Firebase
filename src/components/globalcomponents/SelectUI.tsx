import { Option, Select } from '@material-tailwind/react';
import { AddTextUI } from './TextUI';


const SelectUI = ({ label = '', options, ...rest }) => {
    return (
        <>
            <AddTextUI label={label} />
            <Select
                size="lg"
                labelProps={{
                    className: "hidden",
                }}
                className="border-t-blue-gray-200 h-10 aria-[expanded=true]:border-t-primary"
                {...rest}
            >
                {options.map(e => {
                    return <Option value={e}>{e}</Option>
                })}
            </Select>
        </>
    );
}

export default SelectUI;
