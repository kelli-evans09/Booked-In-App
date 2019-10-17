const remoteURL = "http://localhost:5002"

export default {
    postNewUser(newUser) {
        return fetch(`${remoteURL}/officers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(response => response.json())
    },
    
    getUserbyUsername(username){
        return fetch(`${remoteURL}/officers?username=${username}`).then(response =>
            response.json())
    }
}