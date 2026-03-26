import { useEffect, useState } from "react";

export default function DataTable({ colonnes, fetchData }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then(result => {
               console.log(result);
                setData(result);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="p-4 text-sm">loading</p>;
    }
    
      return (
        <div className="p-4 ">
            <table className="w-full bg-white">
              <tr className="bg-black text-white">
                  {colonnes.map((colonne, index) => (
                    <td key={index} className="p-2">
                        {colonne.label}
                    </td>
                ))}
              </tr>

              {data.map((item, index) => (
                  <tr key={index} className="border-b">
                      {colonnes.map((colonne, i) => (
                         <td key={i} className="p-2">
                             {item[colonne.key]}
                        </td>
                    ))}
                </tr>
            ))}
            </table>
          </div>
    );
}