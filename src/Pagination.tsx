import React from 'react'
import usePagination from './usePagination';

interface Props {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    boundaryCount?: number;
    disabled?: boolean;
}

function Pagination({
    count,
    page,
    onPageChange,
    siblingCount = 2,
    boundaryCount = 5,
    disabled = false
}: Props) {
    const { items } = usePagination({
        count, page, onPageChange, siblingCount, boundaryCount, disabled
    })

    return (
        <ol>
            {
                items.map(({ key, disabled, selected, onClick, item }) => {
                    return <li key={key}>
                        <button disabled={disabled} onClick={onClick}>{item}</button>
                    </li>
                })
            }
        </ol>
    )
}

export default Pagination