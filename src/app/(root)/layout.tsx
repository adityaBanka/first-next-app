import React from 'react'

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div>Inner root</div>
            {children}
        </div>
    )
}

export default layout