import React from 'react'
import Link from 'next/link'

const about = () => {
    return (
        <>
            <div>This is about page of the site.</div>    
            <Link href="/"> Go Back</Link>
        </>
    )
}

export default about