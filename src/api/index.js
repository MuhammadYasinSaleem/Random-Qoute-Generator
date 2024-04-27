export const fetchdata=async()=>{
    const response=await fetch('https://api.adviceslip.com/advice');
    return await response.json();
}