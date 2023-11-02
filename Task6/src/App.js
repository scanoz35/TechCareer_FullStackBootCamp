import './App.css';
import { suppliers } from './data/suppliersData';
import './Table.css'

function App() {

  

  return (<>

    <table className="w3-table w3-striped">
    <thead style={{}}>
      <tr>
        <td >Id</td>
        <td>Company Name</td>
        <td>Contact Name</td>
        <td>Contact Title</td>
      </tr>
    </thead>

    <tbody>
      {
        suppliers && suppliers.map((item) => {
          return <tr>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.contactTitle}</td>
          </tr>
        })
      }
    </tbody>
    </table>



</>);
}

export default App;
