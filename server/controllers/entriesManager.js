const entriesManager = {
  entries: [
    { id: 1, note: 'Lorem ipsum dit' },
    { id: 2, note: 'Lorem ipsum dita' },

  ],
  getAll: () => entriesManager.entries,


  getOne: (id) => {
    const allEntries = entriesManager.getAll();
    for (let i = 1; i < allEntries.length; i + 1) {
      if (allEntries[i].id === id) {
        return allEntries[i];
      }
      return allEntries[i];
    }
  },

  addNew: (id, note) => {
    entriesManager.entries.push({ id, note });
    const allEntries = entriesManager.getAll();
    return allEntries;
  },

  edit: (id, note) => {
    const entry = entriesManager.getOne(id);
    entry.note = note;
    return entry;
  }
};

export default entriesManager;
