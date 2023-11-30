import React, {useEffect, useState} from 'react'
import  './paginator.css'

const Paginator = (props) => {
    const {totalCount, pageSize, currentPage, setPage, portionSize = 5} = props
      let pageCount = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount/ portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const updatePortion = () => {
        setPortionNumber(portionNumber+1)
        setPage(leftPortionPageNumber)
    }

    useEffect(()=>{
        setPage(leftPortionPageNumber)
        // eslint-disable-next-line
    },[portionNumber])


    return   <div className='pagination-container'>
        { portionNumber > 1 && <button className='paginator-btn'  onClick={()=>{setPortionNumber(portionNumber-1)}}> 	&#60; </button>}
        {
            pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <span
                    className={page === currentPage ? 'page-number current-page' : 'page-number'}
                    onClick={() => { setPage(page) }}
                     key={page}
                >{page}</span>
            })
        }
        {
            portionCount > portionNumber && 
            <button className='paginator-btn' onClick={updatePortion}> 	&#62; </button>
        }
        </div>
}

export default Paginator