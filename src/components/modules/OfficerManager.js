const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/officers/${id}`).then(result => result.json());
  },

  getAll() {
    return fetch(`${remoteURL}/officers?_sort=bookingNumber&_order=desc`).then(result => result.json());
  }

}