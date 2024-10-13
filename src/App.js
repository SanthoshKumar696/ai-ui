import QueryHistory from './components/QueryHistroy/QueryHistory';
import './App.css';
import {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

const initialQueryHistory=[
  {
    id:uuidv4(),
    day:'Today',
    query:'What is the function of list the components How many relays in t',
  },
  {
    id:uuidv4(),
    day:'Yesterday',
    query:'What is the function of List the components How Many relays in t',
  },
  {
    id:uuidv4(),
    day:'Wednesday',
    query:'What is the function of List the components How Many relays in t',
  },
]

class App extends Component{
  state={
    currentQueryHistory:initialQueryHistory,}

  

  render(){
    const {currentQueryHistory}=this.state

    return(
      
      <div className='App-overall-container'>
        <div className='Query-History-Container'>
          <div className='Query-title-container'>
              <div >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='Query-clock-icon'>
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#9797AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#9797AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className="Query-title">
                <h3 >Query History</h3>
              </div>
          </div>
          <div className='Query-history-list'>
            <div >{
              currentQueryHistory.map(eachQuery=>(
                <QueryHistory
                queryDetails={eachQuery}
                key={eachQuery.id}
                />))}
            </div>
            <div className='scrollbar-container'></div>
              
          </div>
        </div>


        <div className='Query-Container'>
          <div className='query-input-container'>
            <div >
              <input type='text' placeholder='Ask Query' className='query-input'/>
            </div>

            <div htmlFor='submit-btn'>
              <button type='submit' className='submit-btn' id='submit-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" className='query-play-icon' htmlFor='submit-btn'>
                <path d="M37.5 18.4019C39.5 19.5566 39.5 22.4434 37.5 23.5981L15 36.5885C13 37.7432 10.5 36.2998 10.5 33.9904L10.5 8.00962C10.5 5.70022 13 4.25684 15 5.41154L37.5 18.4019Z" fill="#686868"/>
              </svg >
              </button>
            </div>
          </div>

          <div className='query-output-container'></div>
        </div>
      </div>

    )
  }
}

export default App


