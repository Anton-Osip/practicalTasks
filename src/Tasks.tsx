type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}


export type TasksType = {
    title: string
    tasks: TaskType[]
    students: string[]
}
type TasksProps = {
    tasks: TasksType

}


export const Tasks = ({tasks}: TasksProps) => {
    return (<>
            <h1>{tasks.title}</h1>
            <ul>
                {tasks.tasks.map((task: TaskType) => {
                    return (
                        <li key = {task.taskId}>
                            <span>{task.taskId} - </span>
                            <span>{task.title};</span>
                            <span> isDone {task.isDone}</span>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {tasks.students.map((student: string,id ) => {
                    return (
                        <li key = {id}>
                            <span>{id} - </span>
                            <span>{student}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}