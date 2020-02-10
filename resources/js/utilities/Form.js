import Errors from './Errors'

export class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }


  /**
   * Fetch all relevant data for the form.
   */
  data() {
    let data = new FormData();

    for (let property in this.originalData) {
        data.set(property, this[property]);
    }

    return data;
  }


  /**
   * Reset the form fields.
   */
  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }


  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post(url, clear) {
    return this.submit('post', url, clear);
  }


  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put(url, clear) {
    return this.submit('put', url, clear);
  }


  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch(url, clear) {
    return this.submit('patch', url, clear);
  }


  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete(url, clear) {
    return this.submit('delete', url, clear);
  }


  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit(requestType, url, clearOnSuccess = false) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          if(clearOnSuccess){
            this.onSuccess(response.data);
          }

          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }


  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess(data) {
    this.reset();
  }


  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.errors.record(errors);
  }
}

export default Form;
