import TaskList from './components/TaskList'
import MultipleSelectChip from "./components/MultipleSelectChip.tsx";
import * as React from "react";
import {useState} from "react";
import {TaskType} from "../../models/Task.ts";
import {tasks} from "../../utils/mockData.ts";
import Title from "../../components/Title.tsx";

export default function TaskListPage() {

    const [taskList, setTaskList] = useState<TaskType[]>(tasks);
    const [selectedLabel, setSelectedLabel] = React.useState<string[]>([]);

    const filterByLabel = () => {
        if (selectedLabel.length === 0) {
            setTaskList(tasks);
        } else {
            const filteredTask =
                tasks.filter(value => selectedLabel.includes(value.label));
            setTaskList(filteredTask);
        }
    }

    React.useEffect(() => {
        filterByLabel();
    }, [selectedLabel])

    return (
        <main>
            <Title content='Task List'/>
            <MultipleSelectChip selectedLabel={selectedLabel}
                                setSelectedLabel={setSelectedLabel}
            />
            <TaskList taskList={taskList}/>
        </main>
    )
}
