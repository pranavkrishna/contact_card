

export default function Navbar() {
    return (
        <header>
        <h2>
            <a href="/">Pranav Krishna - Dev</a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">
                About me
                </a>
            </li>
            <li className="mx-2">
                <a href="#portfolio">
                Portfolio
                </a>
            </li>
            <li className="mx-2">
                <a href="#contact">
                Contact
                </a>
            </li>
            <li className="mx-2">
                <a href="#resume">
                Resume
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
    }