import logo from './logo.svg';
import './App.css';

// function App() {
 
  
// }

// export default App;
// import { useState } from 'react';

// const Exercise1 = () => {
//     const [person, setPerson] = useState({ name: "name:", age: "age:" });

//     const handleChange = (event, property) => {
//         setPerson({ ...person, [property]: event.target.value });
//     }

//     const handleButtonClick = () => {
//         alert(`Come in ${person.name}, youre ${person.age} - thats good enough`);
//     }

//     return (
//         <div>
//             <input 
//                 id="name-input" 
//                 onChange={(e) => handleChange(e, 'name')} 
//                 value={person.name} 
//             />
//             <input 
//                 id="age-input" 
//                 onChange={(e) => handleChange(e, 'age')} 
//                 value={person.age} 
//             />
//             <button onClick={handleButtonClick}>Click</button>
//         </div>
//     );
// }

// export default Exercise1;
import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const handleFruitChange = (event) => {
        const selectedFruit = event.target.value;
        setFruit(selectedFruit); 
        if (name && selectedFruit) { 
            console.log(`${name} selected ${selectedFruit}`);
        }
    };

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={handleFruitChange} 
                value={fruit}
            >
                <option value="">Select a fruit</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
}

export default Exercise2;


