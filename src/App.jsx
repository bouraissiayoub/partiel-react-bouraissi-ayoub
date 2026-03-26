import './App.css'
import DataTable from './Component/DataTable/DataTable.jsx';

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
            <DataTable colonnes={colonnes} fetchData={fetchUsers} />
        </div>
    );
}

export default App;