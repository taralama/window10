export const Open = (props:string) => {
    const open = props ? document.getElementsByClassName(`${props}`)[0] : document.getElementById(`${props}`)
    if(open){
        open.classList.toggle('open')
    }else{
        console.log('open is not getting any thing null')
    }
}

export default Open

