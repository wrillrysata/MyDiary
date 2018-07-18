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
    res.send(result);
  }
}
export default Entries;
