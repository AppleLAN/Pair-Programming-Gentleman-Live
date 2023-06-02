import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {TaskType} from "../../../../models/Task.ts";
import {ChangeEvent, SyntheticEvent, useState} from 'react';

export default function SearchText({option, handleAutoCompleteSelectedValueCallBack}: {
        option: TaskType[], handleAutoCompleteSelectedValueCallBack:(newValue: string) => void }) {

    const [newValue, setNewValue] = useState<string>('');
    const [inputValue, setInputValue] = useState('');
    const handleAutoComplitedChange = (event: SyntheticEvent<Element, Event>,
                                       newInputValue: string) => {
        event.preventDefault();
        setInputValue(newInputValue);
    };

    const handleAutoCompleteSelectedValue = (event: ChangeEvent<HTMLInputElement>,
                                             newValue: string) => {
        event.preventDefault();
        setNewValue(newValue);
        handleAutoCompleteSelectedValueCallBack(newValue)
    };

    return (
            <Autocomplete
                value={newValue}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onChange={handleAutoCompleteSelectedValue}
                fullWidth
                inputValue={inputValue}
                onInputChange={handleAutoComplitedChange}
                id="controllable-states-demo"
                options={option.map(value1 => value1.title)}
                renderInput={(params) => <TextField {...params} label="Controllable"/>}
            />
    );
}