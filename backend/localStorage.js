___
async function handleSubmit(e) {
    const response = await fetch(`http://localhost:5000/authentication/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (response.status === 200) {
        setCurrentUser(data.user)
        localStorage.setItem('token', data.token)
        history.push(`/`)
    } else {
        setErrorMessage(data.message)
    }
}