import React, {useEffect, useState} from 'react'
import styles from './paginator.module.css'

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


    return   <div className={styles.pagination}>
        { portionNumber > 1 && <button className={styles.paginationBtn}  onClick={()=>{setPortionNumber(portionNumber-1)}}> &larr; </button>}
        {
            pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <span 
                    className={page === currentPage ? styles.currentPage : styles.pageNumber}
                    onClick={() => { setPage(page) }}
                >{page}</span>
            })
        }
        {
            portionCount > portionNumber && 
            <button className={styles.paginationBtn} onClick={updatePortion}> &rarr; </button>
        }
        </div>
}

export default Paginator