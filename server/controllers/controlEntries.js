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
    const { id } = req.params;
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
    const { id } = req.params.id;
    const { note } = req.params.note;
    const result = entriesManager.addNew(id, note);
    res.status(200).send(result);
  }
}
export default Entries;
