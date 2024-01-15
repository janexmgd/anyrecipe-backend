export const success = (res,payload)=>{
    const {code,message,data,pagination=false,token=false}=payload
    const response = {
        success:true,
        message,
        data
    }
    if (pagination)response.pagination=pagination
    if(token){
        response.token=token
        delete response.data
    }
    res.status(code).json(response)
}
export const failed = (res,payload)=>{
    const {code,message,error}=payload
    if (!payload.code) {
        payload.code = 500
    }
    const response = {
        success:false,
        message,
        error
    }
    res.status(code).json(response)
}