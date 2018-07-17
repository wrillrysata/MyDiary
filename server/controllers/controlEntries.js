import entriesManager from './entriesManager';
/**
   * @class Entries
   * @param {any} req
   * @param {any} res
 */
class Entries {
/**
 * @method
 * @memberOf Entries
 * @param {any} req
 * @param {any} res
 * @returns {obj} //returns object
 */
  getAllEntries(req, res) {
    res.send(entriesManager.getAll());
  }
}
export default Entries;
