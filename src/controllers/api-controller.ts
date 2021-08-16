import { Router } from 'express';

interface IApiController {
    
    router: Router;
    service: string;
}  
 
export default IApiController;