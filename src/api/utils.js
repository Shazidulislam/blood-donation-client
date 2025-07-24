import axios from "axios"

export const imageUpload = async imageData=>{

    const imageFormData = new FormData()
    imageFormData.append("image" , imageData)

    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}` ,imageFormData )

    return data?.data?.display_url
}

//save user in db
export const createUserRecord=async (userData)=>{
    const {data} = await axios.post(`${import.meta.env.VITE_SERVER_KEY}/user` , userData)
    console.log(data)
    return data
}