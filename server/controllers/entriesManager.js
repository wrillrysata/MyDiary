const entriesManager = {
  entries: [
    { id: 1, note: 'Lorem ipsum dit' },
    { id: 2, note: 'Lorem ipsum dit' },

  ],
  getAll: () => entriesManager.entries,


  getOne: (id) => {
    const allEntries = entriesManager.getAll();
    for (let i = 0; i < allEntries.length; i + 1) {
      if (allEntries[i].id === id) {
        return allEntries[i];
      }
      return allEntries[i];
    }
  },

  addNew: (id, note) => {
    entriesManager.entries.push({ id, note });
    return entriesManager.entries;
  }
};

export default entriesManager;
