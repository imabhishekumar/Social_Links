import Button from './Button'
import data from './buttonData'
const Buttons = () => {
    const allButtons = data.map(item => {
        console.log(item.icon);
        return(
            <Button 
                key = {item.id}
                title = {item.title}
                bgColor = {item.bgColor}
                color = {item.color}
                url = {item.url}
                icon = {item.icon}
            />
        )
    })
    return(
       <div className="allButtons">
            {allButtons}
       </div>
       
    )
    
}
    

export default Buttons
