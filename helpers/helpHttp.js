 const helpHttp = async (url) => {
    try {
        const res = await fetch(url)
        if(!res.ok) throw {
            statusText : res.statusText || "No se encontro resultado", 
            status : res.status || 404 ,
            error : true
        }
        const json = res.json()
        
        return json
    }catch(err) {
        return err
    }
}

export default helpHttp