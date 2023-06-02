import { TaskList, Title, FilterBaseComponent } from '../components/Shared.ts';
import { tasks } from "../../../utils/mockData.ts";
import {Divider } from "@mui/material";
import {Structure} from "../../../components/Structure.tsx";
import {TaskType} from "../../../models/Task.ts";
import {useState} from "react";

export default function TaskListPage() {

    const [taskList, setTaskList] = useState<TaskType[]>(tasks);
    const refreshTaskList = (filteredTaskList:TaskType[]) => setTaskList(filteredTaskList)

    return (
        <Structure>
            <Title content='Filter Section'/>
            <FilterBaseComponent taskList={taskList} refreshTaskList={refreshTaskList}/>
            <Divider sx={{pt: 3}}/>
            <Title content='Task List'/>
            <TaskList taskList={taskList}/>
        </Structure>
    );
}
