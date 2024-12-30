// Navlink Content//
let navLinks = [
    { id: 1, plainText: "Home", componentName: "Home" },
    { id: 2, plainText: "2D Transformations", componentName: "TwoDimensionalGrid" },
    { id: 3, plainText: "Thinking in 3D", componentName: "ThinkingThreeDimensions" },
    { id: 4, plainText: "3D Transformations", componentName: "ThreeDimensionalGrid" },
    { id: 5, plainText: "Transitions", componentName: "Transitions" },
    { id: 6, plainText: "Animations", componentName: "Animations" }]

// Rendered List to create the Navbar//
export default function Navbar({ activeLink, setActiveLink }) {

    const listItems = navLinks.map(navLink => {
        function handleClick() {
            setActiveLink(navLink.componentName);
        }
        return (
            <button key={navLink.id} className={`nav-link ${activeLink === navLink.componentName ? "click" : ""}`}
                onClick={() => handleClick(navLink.id)}>{navLink.plainText}</button>
        )
    });

    // Returned List of Navbar Content//
    return (
        <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-around">
            <a className="navbar-brand">Animation Cheat Sheet</a>
            {listItems}
        </nav>
    )
}