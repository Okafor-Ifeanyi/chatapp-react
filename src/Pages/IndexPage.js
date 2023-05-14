import React from 'react'
import { useNavigate } from 'react-router-dom'

function IndexPage() {
    const redirect = useNavigate()

    React.useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (!token) {
            redirect('/login')
        } else {
            redirect("/dashboard")
        }
        // eslint-diable-next-line
    }, [])
    
    return (
        <div>
            Index
        </div>
    )
}

export default IndexPage
