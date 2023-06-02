import {MultipleSelectChip} from "../Shared.ts";
import {label} from "../../../../utils/mockData.ts";
import SearchText from "./SearchText.tsx";
import {Grid} from "@mui/material";
import {useState} from "react";
import {TaskType} from "../../../../models/Task.ts";
import {filterList} from "./utils/Filter.ts";

export const FilterBaseComponent = ({taskList, refreshTaskList}:
                                    { taskList: TaskType[], refreshTaskList:(filteredTaskList:TaskType[])=>void}) => {

    const [filterOptions, setFilterOptions] = useState<string[]>([]);

    const handleChangeLabelsFilter = (value: string[]) => {
        const valuesToFilter = Array.isArray(value) ? [...value] : [value];
        const filterOptions = valuesToFilter.filter((element) => element !== "");
        setFilterOptions(filterOptions);
        filterByOptions(filterOptions)
    };

    const handleAutoCompleteSelectedValueCallBack = (newValue: string) => {
        filterByOptions(newValue ? [...filterOptions, newValue] : [...filterOptions])
    };

    const filterByOptions = (optionsToFilter: string[])=>{
        const taskFiltered = filterList(optionsToFilter);
        refreshTaskList(taskFiltered)
    }

    return (
        <Grid container>
            <Grid item xs={6} sx={{pr: 1}}>
                <MultipleSelectChip
                    labels={label}
                    handleChangeCallBack={handleChangeLabelsFilter}
                />
            </Grid>
            <Grid item xs={6}>
                <SearchText
                    option={taskList}
                    handleAutoCompleteSelectedValueCallBack={handleAutoCompleteSelectedValueCallBack}
                />
            </Grid>
        </Grid>
    )
}