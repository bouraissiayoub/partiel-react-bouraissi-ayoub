import './App.css'
//import DataTable from './Component/DataTable/DataTable.jsx';
import {lazy , Suspense} from 'react';
const DataTable = lazy(() => import('./Component/DataTable/DataTable.jsx'));


function App() {
    const colonnes = [
        { label: "id", key: "id" },
        { label: "prenom", key: "firstName" },
        { label: "nom", key: "lastName" },
        { label: "email", key: "email" },
    ];

    const fetchUsers = () => {
        return fetch("https://dummyjson.com/users")
            .then(result => result.json())
            .then(data => data.users);
    };

    return (
        <div className="p-4">
            <h1 className='text-3xl'>tableau des utilisateur</h1>
            <Suspense fallback={<p className="p-4 text-sm">loding composant</p>}>
            <DataTable colonnes={colonnes} fetchData={fetchUsers} />
            </Suspense>
        </div>
    );
}

export default App;