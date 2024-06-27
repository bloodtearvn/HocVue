import axios,{AxiosInstance, HttpStatusCode } from "axios";


class HttpService{    
    private apiClient:AxiosInstance;
    private testDefind;
    public constructor(scheme:string,baseDomain:string,port:string,path:string) {        
        let apiClient:AxiosInstance=axios.create({            
            baseURL:scheme+"://"+baseDomain+":"+port+"/"+path,
            headers: {
                'Content-Type': 'application/json',                
                'Accept':'application/json',                
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        })
        this.apiClient=apiClient;        
    }
    public updateBearToken(token:string){
        let baseURL=this.apiClient.defaults.baseURL
        let apiClient:AxiosInstance=axios.create({            
            baseURL:baseURL,
            headers: {
                'Content-Type': 'application/json',                
                'Accept':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Authorization': "Bearer "+token
            },
        })
        this.apiClient=apiClient;
    }
    public async callAPIMethodGet(endPoint:string,params:any):Promise<any>{
        let response=await this.apiClient.get(endPoint,params);
        return response;
    }
    public async callAPIMethodPost(endPoint:string,params:any):Promise<any>{
        let response=await this.apiClient.post(endPoint,params);
        if (response.status==HttpStatusCode.Ok)
            return response.data;
        return response
    }
    public async callAPIMethodPUT(endPoint:string,params:any):Promise<any>{
        let response=await this.apiClient.put(endPoint,params);
        return response;
    }
    public async callAPIMethodDelete(endPoint:string,params:any):Promise<any>{
        let response=await this.apiClient.delete(endPoint,params);
        return response;
    }
}
const callAPI=new HttpService("https","dym-vietnam.dev","443","api");
export default callAPI;