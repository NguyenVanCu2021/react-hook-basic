import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function Covid(props) {

    const [dataCovid, setDataCovid] = useState([])

    useEffect(async() => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-03-01T00:00:00Z&to=2021-04-01T00:00:00Z')
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD/MM/YYYY');
                return item;
            })
        }
        setDataCovid(data)
        console.log(">>> check respone ", data)
    },[]) //dung [] để useEffect chỉ chạy một lần <=> componentDidMount

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
              {dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
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
              
          </tbody>
        </table>
    );
}

export default Covid;