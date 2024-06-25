import React from 'react'

export default function layout({children}) {
    return (
        <div>
            <h1>Dashboard layout</h1>
            {children}
            <footer>
                <h1>Footer of the dashboard</h1>
            </footer>
        </div>
    )
}
