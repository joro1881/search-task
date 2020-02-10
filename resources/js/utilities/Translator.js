export class Translator {
  /**
   * Create a new Translator instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;
  }


  /**
   * Translate the given keyword
   */
  l(keyword) {
    return this.originalData[keyword] || keyword;
  }

}

export default Translator;
