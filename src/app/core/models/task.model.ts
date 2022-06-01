export interface Task {
  taskName: string,
  taskDescription: string,
  taskStatus?: TaskCombox[]
}

export interface TaskCombox {
  id: number,
  text: string
}
