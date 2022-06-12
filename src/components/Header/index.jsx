import logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start" />
            <div className="navbar-center hidden lg:flex">
                <img className="logo" src={logo} alt="ScoutingNL Logo" />
            </div>
            <div className="navbar-end" />
        </div>
    )
}
