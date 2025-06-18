import './dueService.css';
import Layout from '../components/layout.jsx';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleService from "../components/shedule_service.jsx";
import { useState } from 'react';

const alertData = [
  {
    id: '#360',
    name: 'Divisional Secretary Yakkalamulla - Galle',
    date: '2025-04-05',
    round: '1st round',
    color: 'red'
  },
  {
    id: '#361',
    name: 'Damayanthi De Silva - Malabe',
    date: '2025-05-10',
    round: '2nd round',
    color: 'yellow'
  },
  {
    id: '#362',
    name: 'Aruna Patabadige - Kottawa',
    date: '2025-05-19',
    round: 'free round',
    color: 'yellow'
  },
  {
    id: '#363',
    name: 'Aruna Shantha - Matara',
    date: '2025-06-19',
    round: '2nd round',
    color: 'green'
  }
];

const DueService = () => {
  const [schedule, setSchedule] = useState(false);

  return (
    <Layout>
      <div className="dueServiceContainer">
        <div className= "titleAndSearch">
        <h2 className="title">Due Service Alerts</h2>

        <div className="search-row11">
          <input
            type="text"
            className="search-input1"
            placeholder="Search by area"
          />
        </div>
        </div>
        <div className="alert-list">
          {alertData.map((alert, index) => (
            <div key={index} className={`alert-row ${alert.color}`}>
              <div className="alert-id">{alert.id}</div>
              <div className="alert-name">{alert.name}</div>
              <div className="alert-date">{alert.date}</div>
              <div className="alert-round">{alert.round}</div>
              <div className="alert-icon">
                <CalendarMonthIcon onClick={() => setSchedule(true)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScheduleService show={schedule} onClose={() => setSchedule(false)} />
    </Layout>
  );
};

export default DueService;



// import './dueService.css';
// import Layout from '../components/layout.jsx';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ScheduleService from "../components/shedule_service.jsx";
// import {useState} from 'react';

// const alertData = [
//   {
//     id: '#360',
//     name: 'Divisional Secretary Yakkalamulla - Galle',
//     date: '2025-04-05',
//     round: '1st round',
//     color: 'red'
//   },
//   {
//     id: '#361',
//     name: 'Damayanthi De Silva - Malabe',
//     date: '2025-05-10',
//     round: '2nd round',
//     color: 'yellow'
//   },
//   {
//     id: '#362',
//     name: 'Aruna Patabadige - Kottawa',
//     date: '2025-05-19',
//     round: 'free round',
//     color: 'yellow'
//   },
//   {
//     id: '#363',
//     name: 'Aruna Shantha - Matara',
//     date: '2025-06-19',
//     round: '2nd round',
//     color: 'green'
//   }
// ];

// const DueService = () => {
//   const [schedule, setSchedule] = useState(false);
//   return (
//     <Layout>
//       <div className="dueServiceContainer">
//         <h2 className="title">Due Service Alerts</h2>
//         <div className="search-row">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search by area"
//           />
//         </div>

//         <div className="alert-list">
//           {alertData.map((alert, index) => (
//             <div key={index} className={alert-row ${alert.color}}>
//               <div className="alert-id">{alert.id}</div>
//               <div className="alert-name">{alert.name}</div>
//               <div className="alert-date">{alert.date}</div>
//               <div className="alert-round">{alert.round}</div>
//               <div className="alert-icon">
//                 <CalendarMonthIcon onClick= {() => setSchedule(true)} />
//               <ScheduleService show={schedule} onClose={() => setSchedule(false)} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default DueService;