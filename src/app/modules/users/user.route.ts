import { Router } from "express";
import { userController } from "./user.controller";
// import validateRequest from "../../middlewares/validateRequest";
// import { userValidationSchema } from "./user.validation";

const router = Router();

router.post('/sign-up',
    // validateRequest(userValidationSchema),
     userController.createUser)

export const UserRouter = router;