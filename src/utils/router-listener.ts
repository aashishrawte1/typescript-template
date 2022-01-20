import Router from 'express';
import { starterApi_up } from '../controller/starter.controller';

const router = Router();

export const apiRoutes = {
    api: "api/starter"
}

router.get(apiRoutes.api, starterApi_up);

