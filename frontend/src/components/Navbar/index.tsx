import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
	return (
		<header>
			<nav className='container'>
				<div className='dsmovie-nav-content'>
					<a href="/">
						<h1>DSMovie 🍿</h1>
					</a>
					<a href="https://github.com/VLx2000">
						<div className='dsmovie-contact-container'>
							<GithubIcon />
							<p className='dsmovie-contact-link'>/VLx2000</p>
						</div>
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;