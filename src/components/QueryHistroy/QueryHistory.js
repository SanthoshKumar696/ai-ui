import './index.css'
const QueryHistory=props=>{
    const {queryDetails}=props
    const {day,query}=queryDetails


    return(
        <div className='Query-list'>
            <h3 className='time'>{day}</h3>
            
            <h3 className='query'>{query}</h3>
        </div>
    )

}
export default QueryHistory