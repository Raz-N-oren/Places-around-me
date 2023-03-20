import express, { Request, Response, NextFunction } from "express";
import StoreModel from "../4-models/store-model";
import logic from "../5-logic/logic";

// Only the routing part of express without the entire server.
const router = express.Router(); 

// GET http://localhost:3001/api/stores
router.get("/stores", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const stores = await logic.getAllStores();
        response.json(stores);
    }
    catch (err: any) {
        next(err); // Catch-all middleware
    }
});

// POST http://localhost:3001/api/stores
router.post("/stores", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const store = new StoreModel(request.body);
        const addedStore = await logic.addStore(store);
        response.status(201).json(addedStore);
    }
    catch (err: any) {
        next(err); // Catch-all middleware
    }
});

export default router;