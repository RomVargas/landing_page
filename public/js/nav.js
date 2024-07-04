export function createNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `<nav id="menu">
                <ul>
                    <li><a href="#articles">HOME</a></li>
                    <li><a href="#stack">STACK</a></li>
                   <li><a href="#cards">LEARN</a></li>
                   <li><a href="#">MY THREEJS MODELS</a></li>
                   <li><a href="#">CONTACT</a></li> 
                </ul>
            </nav>`;

    return nav;
}