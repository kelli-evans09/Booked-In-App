const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/arrestingAgencies/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/arrestingAgencies`).then(result => result.json());
  },

//   Don't actually need this yet
  softDelete(id) {
    return fetch(`${remoteURL}/arrestingAgencies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ archived: true })
    }).then(result => result.json());
  },
  post(newArrestingAgency) {
    return fetch(`${remoteURL}/arrestingAgencies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArrestingAgency)
    }).then(data => data.json());
  },
  update(editedArrestingAgency) {
    return fetch(`${remoteURL}/arrestingAgencies/${editedArrestingAgency.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArrestingAgency)
    }).then(data => data.json());
  },
  getWithArrestingAgencies(id) {
       return fetch(`${remoteURL}/arrestingAgencies/${id}?_embed=arrestingAgencies`)
               .then(result => result.json())
   }
};
