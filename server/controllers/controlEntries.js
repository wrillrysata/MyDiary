import entriesManager from './entriesManager';
/**
   * @class Entries
 */
class Entries {
/**
 * @method
 * @memberOf Entries
 * @param {any} req
 * @param {any} res
 * @returns {obj} //returns object
 */
  static getAllEntries(req, res) {
    const result = entriesManager.getAll();
    res.status(200).send(result);
  }

  /**
 * @method
 * @memberOf Entries
 * @param {any} req
 * @param {any} res
 * @returns {obj} //returns object
 */
  static getOneEntry(req, res) {
    const { id } = req.body;
    const result = entriesManager.getOne(id);
    res.status(200).send(result);
  }

  /**
 * @method
 * @memberOf Entries
 * @param {any} req
 * @param {any} res
 * @returns {obj} //returns object
 */
  static addEntry(req, res) {
    const { id, note } = req.body;
    const result = entriesManager.addNew(id, note);
    res.json({ message: 'Successfully added!', result }).status(200);
  }

  /**
 * @method
 * @memberOf Entries
 * @param {any} req
 * @param {any} res
 * @returns {obj} //returns object
 */
  static editEntry(req, res) {
    const { id, note } = req.body;
    const result = entriesManager.edit(id, note);
    res.json({ message: 'Successfully updated!', result }).status(200);
  }
}
export default Entries;
