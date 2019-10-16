const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/officers/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/officers`).then(result => result.json());
  },

  softDelete(id) {
    return fetch(`${remoteURL}/officers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ archived: true })
    }).then(result => result.json());
  },
  post(newOfficer) {
    return fetch(`${remoteURL}/officers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOfficer)
    }).then(data => data.json());
  },
  update(editedOfficer) {
    return fetch(`${remoteURL}/officers/${editedOfficer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedOfficer)
    }).then(data => data.json());
  },
  getWithInmates(id) {
       return fetch(`${remoteURL}/officers/${id}?_embed=inmates`)
               .then(result => result.json())
   }
};
