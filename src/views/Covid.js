import useFetch from '../../src/custom/fetch';
import moment from 'moment';

const Covid = () => {

    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const priorDate = moment().subtract(30, 'days');

    // const { data: dataCovid, isLoading, isError } = useFetch('https://api.covid19api.com/country/vietnam?from=2021-03-01T00:00:00Z&to=2021-04-01T00:00:00Z')
    const { data: dataCovid, isLoading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`)

    
    return (
        <table>
            {console.log(">>> check data covid ", dataCovid)}
          <thead>
              <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>Recovered</th>
              </tr>
          </thead>
          <tbody>
              {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                  return (
                    <tr key={item.ID}>
                        <td>{item.Date}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Deaths}</td>
                        <td>{item.Recovered}</td>
                    </tr>
                  )
              })} 

              {isLoading === true && 
                <tr>
                    <td colSpan="5" style={{ 'textAlign': 'center' }}>Loading...</td>
                </tr>
              }

              {isError === true && 
                <tr>
                    <td colSpan="5" style={{ 'textAlign': 'center' }}>Something Wrong...</td>
                </tr>
              }             
          </tbody>
        </table>
    );
}

export default Covid;