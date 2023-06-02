import {tasks} from "../../../../../utils/mockData.ts";

export function filterList (optionsToFilter: string[]) {
        if (optionsToFilter.length === 0) {
            return (tasks);
        } else {
            const taskMatchedByTitle = tasks.find(task =>
                optionsToFilter.some(searchItem =>
                    task.title.toLowerCase().includes(searchItem.toLowerCase())
                )
            );
            const tasksMatchedByLabel = tasks.filter(task =>
                optionsToFilter.some(searchItem =>
                    task.label.toLowerCase().includes(searchItem.toLowerCase())
                )
            );
            const finalTasks = taskMatchedByTitle ? [taskMatchedByTitle] : [...tasksMatchedByLabel];
            return (finalTasks);
        }
}