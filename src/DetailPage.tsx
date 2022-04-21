import React from 'react'
import { useParams } from 'react-router'
type Params = {
    id: string;
}
function DetailPage() {
    const { id } = useParams<Params>()
    return (
        <div>DetailPage: {id}</div>
    )
}

export default DetailPage