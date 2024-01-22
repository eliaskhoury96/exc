import logo from './logo.svg';

import './App.css';

// function App() {
//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   };

//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ];

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map(company => showCompany(company.name, company.revenue))}
//       </div>
//     </div>
//   );
// }
function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature >= 15 && temperature <= 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  };

  const temperature = 20; 
  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
      <div id="weatherBox" class= {getClassName (temperature )}></div>
      </div>
    </div>
  )
}


export default App;
