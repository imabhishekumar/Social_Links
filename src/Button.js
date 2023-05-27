
const Button = ({id, color, bgColor, title, url, icon}) =>{
    return(
        <a href={url} target='blank'>
            <button key={id} style={{color:color, backgroundColor:bgColor}}>
                 {title} <span className="icon">{icon}</span>
            </button>
        </a>
    )
}

export default Button