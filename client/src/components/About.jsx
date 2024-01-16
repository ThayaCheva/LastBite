export default function About() {
    return (
        <section id="about">
            <div className="about-us">
                <div className="left-container">
                    <img src="src/images/restaurant.jpg" alt="about-img"></img>
                </div>
                <div className="right-container">
                    <h2>This is who we are.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus velit neque ab aut molestias pariatur error quod earum modi laudantium iste odio, tenetur fugit qui officia eligendi mollitia provident!</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="get-started">
                <h1 className="title">GET <span>STARTED</span></h1>
                <div className="users">
                    <div className="users-container">
                        <div className="user-card">
                            <img src="src/images/user.png" alt="user"></img>
                            <h3>I'M A USER</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi optio eum suscipit ipsam vero, quam totam obcaecati recusandae eaque ad veritatis id esse doloremque asperiores amet voluptatum saepe? Quae, modi.</p>
                            <button>Read More</button>
                        </div>
                        <div className="user-card">
                            <img src="src/images/business.png" alt="business"></img>
                            <h3>WE'RE A BUSINESS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi optio eum suscipit ipsam vero, quam totam obcaecati recusandae eaque ad veritatis id esse doloremque asperiores amet voluptatum saepe? Quae, modi.</p>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}