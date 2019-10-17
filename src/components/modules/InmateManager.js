const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/inmates/${id}`).then(result => result.json());
  },

  getAll() {
    return fetch(`${remoteURL}/inmates`).then(result => result.json());
  },

  searchByValues(search) {
    return fetch(`${remoteURL}/inmates?q=${search}`)
  },

  softDelete(id) {
    return fetch(`${remoteURL}/inmates/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ archived: true })
    }).then(result => result.json());
  },

  post(newInmate) {
    return fetch(`${remoteURL}/inmates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newInmate)
    }).then(result => result.json());
  },

  update(editedInmate) {
    return fetch(`${remoteURL}/inmates/${editedInmate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedInmate)
    }).then(result => result.json());
  }
};
