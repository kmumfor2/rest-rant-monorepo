import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        )
    }
    
    let addPlaceButton = null
    
    if (currentUser?.role === 'admin') {
        addPlaceButton = (
            <li>
                <a href="#" onClick={() => history.push("/places/new")}>
                    Add Place
                </a>
            </li>
        )
    }
    return (
        <nav>
              <ul>
                {addPlaceButton}
                {loginActions}
            </ul>
        </nav>
    
    )
    comments = place.comments.map(comment => {
        return (
            <CommentCard 
                key={comment.commentId} 
                comment={comment} 
                onDelete={() => deleteComment(comment)} 
            />
        )
    })
}

let placeActions = null

if (currentUser?.role === 'admin') {
    placeActions = (
        <>
            <a className="btn btn-warning" onClick={editPlace}>
                Edit
            </a>
            <button type="submit" className="btn btn-danger" onClick={deletePlace}>
                Delete
            </button>
        </>
    )
}

return (
    <main>
        <div className="row">
              <h4>
                    Serving {place.cuisines}.
                </h4>
                <br />
                {placeActions}
            </div>
</main>
)



export default Navigation;