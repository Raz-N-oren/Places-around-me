class StoreModel {

    public storeId: number;
    public storeName: string;
    public description: string;
    public address: string;
    public latitude: number;
    public longitude: number;

    public constructor(store: StoreModel) {
        this.storeId = store.storeId;
        this.storeName = store.storeName;
        this.description = store.description;
        this.address = store.address;
        this.latitude = store.latitude;
        this.longitude = store.longitude;
    }
}

export default StoreModel;