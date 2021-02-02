import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="header box">
            <h1>Weather App</h1>
            <img className="logo" src={logo} alt="And Logo"/>
        </div>
    )
}

export default Header;