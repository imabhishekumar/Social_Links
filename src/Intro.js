import image from './image/index.jpg'
const Intro = () => {
    return (
        <div className="intro">
            <div id="image">
                <img src={image} id="avator" alt="Abhishek photo"></img>
            </div>
            <div id="circle"></div>
            
            <p className="greet">Hii, I'm <span id="name">Abhishek Kumar</span></p>
            <p className="para">I'm a web developer specializing in React.js. With a passion for creating websites and get experiences. I love to create responsive, user-friendly and intractive websites.</p>
        </div>
    )
}

export default Intro