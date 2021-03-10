import { intersection } from 'lodash';
import PrivateRoutesConfig from '../config/PrivateRoutesConfig';

export function isLoggedIn() {
	/*
		* Note:
		*  This app assume if local storage have roles it means
		*  user is authenticated you can update this logic as per your app.
	*/
	return !!localStorage.getItem('roles')
}

export function isArrayWithLength(arr : any) {
	return (Array.isArray(arr) && arr.length)
}

export function checkMethod(rpath: string, method : string){

    return PrivateRoutesConfig.filter(({ path, methods } : any) => {
        return path === rpath && methods.some((m : any) => m === method);
    })
} 


export function getAllowedRoutes(routes : any) {
    let localRoles = localStorage.getItem('roles');
    if(localRoles === null){
        localRoles = "";
    }
    const roles = JSON.parse(localRoles);
    debugger
    return routes.filter(({ permission, method } : any) => {
        
        if(!permission){
            return true;
        } 
        else if(!isArrayWithLength(permission)) {
            return true;
        }
        else {
            let val = intersection(permission, roles);
            return val.length;
        };
    });
}
