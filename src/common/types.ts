type IUser = {
    id: string,
    name: string,
    login: string,
    password:string
}

type IColumn = {
    columnId: string,
    title: string,
    order: number
}

type IBoard = {
    id: string,
    tittle: string,
    columns:[IColumn]
}

type ITask = {
    id:string,
    title:string,
    order: number,
    decsription:string,
    userId: string | null,
    boardId: string | null,
    columnId: string| null,
}

export { ITask, IBoard, IColumn, IUser };