import axios, { AxiosResponse } from 'axios';
import { URLSearchParams } from 'url';

 class HttpService{
    private     scheme="http"
    private     baseDomain = "localhost"
    private     port="8000"
    private     path="/"    
    private     URI=""
    public constructor({scheme,baseDomain,port,path,header}) {
        this.scheme = scheme ?? "http"
        this.baseDomain = baseDomain ?? "localhost"
        this.port = port ?? "8000"
        this.path = path ?? "/"        
        this.URI    ="${this.scheme}://${this.baseDomain}:${this.port}/${this.path}"
    }
    async get(  endpoint?: string,
                params?:   { [ key: string ]: any },
                headers?:  { [ key: string ]: any })
    : Promise<AxiosResponse>{ 
        const url = "${this.URI}${endpoint}"
        const options = { params, headers }
        return axios.get(url, options)
    }
    async post( endpoint?: string,
                body?:     any,
                params?:   { [ key: string ]: any },
                headers?:  { [ key: string ]: any },
                asFormEncoded?:  boolean)
    : Promise<AxiosResponse>{ 
        const url = "${this.URI}${endpoint}"
        const options = { params, headers }; 
        if (asFormEncoded && body) {
            const bodyParams = new URLSearchParams();
            for (const b of Object.keys(body)) {
                bodyParams.append(b, body[ b ])
            }
        body = bodyParams
        }
        return axios.post(url, body, options)
    }
}
export default loginAPI=new HttpService({scheme:"http",baseDomain:"localhost",port:"80",path:"api/auth"})
export default callServiceAPI=new HttpService({scheme:"http",baseDomain:"localhost",port:"80",path:"api/call-log"})