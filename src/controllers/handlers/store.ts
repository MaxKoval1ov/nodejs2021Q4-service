const tasks = [
  {
    id: 1,
    title: 'first title',
    order: 1,
    description: 'description 1',
    userId: 1,
    boardId: 1,
    columnId: 1,
  },
  {
    id: 2,
    title: 'second title',
    order: 2,
    description: 'description 2',
    userId: 2,
    boardId: 2,
    columnId: 2,
  },
];

const columns = [
  { id: 1, title: 'title column 1', order: 1 },
  { id: 2, title: 'title column 2', order: 2 },
];

const boards = [
  { id: 1, title: 'title board 1', columns },
  { id: 2, title: 'title board 2', columns },
];

const users = [
  { id: 1, name: 'first', login: 'login1', password: 'p@55word' },
  { id: 2, name: 'first', login: 'login1', password: 'p@55word' },
];

export {
  tasks,
  columns,
  boards,
  users
};
