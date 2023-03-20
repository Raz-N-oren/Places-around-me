import { useEffect, useState } from "react";
import StoreModel from "../../../Models/StoreModel";
import storesService from "../../../Services/StoresService";
import "./List.css";

function List(): JSX.Element {

    const [stores, setStores] = useState<StoreModel[]>([]);

    useEffect(() => {

        storesService.getAllStores()
            .then(stores => setStores(stores))
            .catch(err => alert(err.message));

    });

    return (
        <div className="List">

            <h2>List of Stores</h2>

            <table>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Geolocation</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map(s =>
                        <tr key={s.storeId}>
                            <td>{s.storeName}</td>
                            <td>{s.description}</td>
                            <td>{s.address}</td>
                            <td>{s.latitude},{s.longitude}</td>
                        </tr>)
                        }
                </tbody>
            </table>
        </div>
    );
}

export default List;
