import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { isLoggedIn } from '../../utils/Utils';

function TopNav(props:any) {

    let history = useHistory();

	function handleLogout() {
		localStorage.removeItem('roles');
		history.push('/');
	}

    return (
        <div className={`w3-bar w3-padding w3-card bg-white`} >
			<div className="w3-display-topleft w3-padding-large w3-xlarge">
				RBAC-V2
			</div>
			<div className="w3-right">
				{props.routes.map(({ path, title }:any) => (
					<Link key={path} className="w3-bar-item" to={`${props.prefix}${path}`}>
						{title}
					</Link>
				))}
				{isLoggedIn() && <Button onClick={handleLogout}>Logout</Button> }
			</div>
		</div>
    )
}

export default TopNav
