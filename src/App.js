import './App.css'
import CartProvider from './Store/CartProvider'
import Header from './components/Header'
import MedicineForm from './components/MedicineForm'
import MedicineList from './components/MedicineList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
     const [medicines, setMedicines] = useState([]);
     
     const addMedicineHandler = (medicine) => {
       setMedicines((prevMedicines) => [...prevMedicines, medicine]);

     };

     

  return (
    <CartProvider>
       <Header />
       <MedicineForm  onAddMedicine={addMedicineHandler}/>
       <MedicineList medicines={medicines} />
    </CartProvider>
      
  );
}

export default App
