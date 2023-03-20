import axios from "axios";
import StoreModel from "../Models/StoreModel";
import appConfig from "../Utils/Config";

class StoresService {

    public async getAllStores():Promise<StoreModel[]> {
        const response = await axios.get<StoreModel[]>(appConfig.storesUrl);
        const stores = response.data;
        return stores;
    }

    public async addStore(store: StoreModel): Promise<StoreModel> {
        const response = await axios.post<StoreModel>(appConfig.storesUrl,store);
        const addedStore = response.data;
        return addedStore;
    }

}

const storesService = new StoresService();

export default storesService;