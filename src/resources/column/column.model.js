const { v4: uuidv4 } = require('uuid');

class Column {
  constructor({ id = uuidv4(), title = `title`, order = 'order' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  get() {
    return [this.id, this.title, this.order];
  }
}

module.exports = Column;