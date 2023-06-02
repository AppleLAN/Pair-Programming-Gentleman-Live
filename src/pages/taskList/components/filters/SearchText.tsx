import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {TaskType} from "../../../../models/Task.ts";
import { ChangeEvent } from 'react';

export default function ControllableStates(
    {
        option,
        value,
        inputValue,
        onChange,
        onInputChange
    }: {
        option: TaskType[]
        value: string,
        inputValue: string,
        onChange: (event: ChangeEvent<HTMLInputElement>, newValue: string) => void,
        onInputChange: (event: any, newInputValue: any) => void
    }) {

    return (
            <Autocomplete
                value={value}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onChange={onChange}
                fullWidth
                inputValue={inputValue}
                onInputChange={onInputChange}
                id="controllable-states-demo"
                options={option.map(value1 => value1.title)}
                renderInput={(params) => <TextField {...params} label="Controllable"/>}
            />
    );
}