const remoteURL = "http://localhost:5002";

export default {
  getOne(id) {
    return fetch(`${remoteURL}/inmates/${id}?_sort=bookingNumber&_order=desc&_expand=arrestingAgency`).then(result => result.json());
  },

  getAll() {
    return fetch(`${remoteURL}/inmates?_sort=bookingNumber&_order=desc&_expand=arrestingAgency`).then(
      result => result.json()
    );
  },

  // ?_sort=date&_order=desc

  searchByValues(search) {
    return fetch(
      `${remoteURL}/inmates?q=${search}&_sort=bookingNumber&_order=desc&_expand=arrestingAgency&_expand=officer`
    ).then(result => result.json());
  },

  // searchByValuesInactive(search) {
  //   return fetch(
  //     `${remoteURL}/inmates?q=${search}&_sort=bookingNumber&_order=desc&_expand=arrestingAgency&_expand=officer`
  //   ).then(result => result.json());
  // },

  delete(id) {
    return fetch(`${remoteURL}/inmates/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
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
  },

  getWithofficers(id) {
    return fetch(`${remoteURL}/inmates/${id}?_embed=officers`).then(result =>
      result.json()
    );
  },

  getWithArrestingAgencies(id) {
    return fetch(`${remoteURL}/inmates/${id}?_embed=arrestingAgencies`).then(result =>
      result.json()
    );
  },
};
