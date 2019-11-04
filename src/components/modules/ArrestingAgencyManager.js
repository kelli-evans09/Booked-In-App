const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/arrestingAgencies/${id}`).then(result => result.json());
  },

  getAll() {
    return fetch(`${remoteURL}/arrestingAgencies`).then(result => result.json());
  }

}