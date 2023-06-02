import { ChangeEvent } from 'react';
import {SelectChangeEvent} from "@mui/material/Select";
import {useState} from "react";
import {TaskType} from "../../../models/Task.ts";
import {tasks} from "../../../utils/mockData.ts";
import * as React from "react"
export const useTaskListHook = () => {
    const [taskList, setTaskList] = useState<TaskType[]>(tasks);
    const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
    const [newValue, setNewValue] = React.useState<string>('');
    const [inputValue, setInputValue] = React.useState('');
    const handleAutoCompleteSelectedValue = (event: ChangeEvent<HTMLInputElement>, newValue: string) => {
        event.preventDefault();
        setNewValue(newValue);
        filterTasks(newValue?[...selectedLabel, newValue]:[...selectedLabel])
    };
    const handleAutoComplitedChange = (event: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
        event.preventDefault();
        setInputValue(newInputValue);
    };

    const filterTasks = (valuesToFilter: string[]) => {
        console.log(':valuesToFilter: ', valuesToFilter)
        if (valuesToFilter.length === 0) {
            setTaskList(tasks)
        } else {
            const searchLowercased = valuesToFilter
                .map(item => {
                    console.log(':item:', item)
                    return item.toLowerCase()});
            const filteredTasks =
                tasks.filter(task =>
                    searchLowercased.some(searchItem =>
                        (task.title.toLowerCase().includes(searchItem) ||
                            task.label.toLowerCase().includes(searchItem)))
                );
            setTaskList(filteredTasks);
        }
    };

    const handleChangeLabelsFilter = (event: SelectChangeEvent<typeof selectedLabel>) => {
        const { target: { value } } = event;
        const valuesToFilter = Array.isArray(value) ? [...value, newValue] : [value, newValue];
        setSelectedLabel(Array.isArray(value) ? value : [value]);
        const filteredValues = valuesToFilter.filter((element) => element !== "");
        filterTasks(filteredValues);
    };

    return{
        selectedLabel,
        handleChangeLabelsFilter,
        taskList,
        newValue,
        inputValue,
        handleAutoCompleteSelectedValue,
        handleAutoComplitedChange,
    }
}