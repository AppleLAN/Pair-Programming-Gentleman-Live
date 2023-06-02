import {MultipleSelectChip, TaskList, Title} from '../components/Shared.ts';
import {label} from "../../../utils/mockData.ts";
import SearchText from "../components/filters/SearchText.tsx";
import {useTaskListHook} from "./hook.ts";
import {Divider, Grid} from "@mui/material";
import {Structure} from "../../../components/Structure.tsx";

export default function Index() {
    const {
        selectedLabel,
        handleChangeLabelsFilter,
        taskList,
        newValue,
        inputValue,
        handleAutoCompleteSelectedValue,
        handleAutoComplitedChange
    } = useTaskListHook();
    return (
        <Structure>
            <Title content='Filter Section'/>
            <Grid container>
                <Grid item xs={6} sx={{pr: 1}}>
                    <MultipleSelectChip
                        labels={label}
                        selectedLabel={selectedLabel}
                        handleChange={handleChangeLabelsFilter}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchText
                        option={taskList}
                        value={newValue}
                        inputValue={inputValue}
                        onChange={handleAutoCompleteSelectedValue}
                        onInputChange={handleAutoComplitedChange}
                    />
                </Grid>
            </Grid>
            <Divider sx={{pt: 3}}/>
            <Title content='Task List'/>
            <TaskList taskList={taskList}/>
        </Structure>
    );
}
