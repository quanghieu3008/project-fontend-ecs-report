import React from 'react'
import { Pagination } from 'antd'
function CustomPagination(props) {
    const handleChangePage = (current, pageSize) => {
        const { onShowSizeChange, setActivePage, } = props
        setActivePage(current)
        onShowSizeChange(current, pageSize)
    }
    const { activePage, totalPage, sizePage } = props
    return (
        < >
            <Pagination
                onChange={handleChangePage}
                current={activePage}
                total={totalPage}
                pageSize={sizePage ? sizePage : 10}
                showQuickJumper
            />
        </>
    )

}
export default CustomPagination;