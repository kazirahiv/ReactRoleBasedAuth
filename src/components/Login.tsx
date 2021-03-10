import { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SimpleGetRequest } from '../api/Api';

function Login() {

    let [selected, setSelected] = useState<any []>([]);
	let history = useHistory();

	useEffect(() => {
		SimpleGetRequest();
	}, [])

    function handleChange(e : any) {
		const { options } = e.target;
		let selected = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setSelected(selected);
	}

    function handleClick() {
		localStorage.setItem('roles', JSON.stringify(selected));
		history.push('/app');
	}


    return (
        <div title="Login">
			<Form.Group controlId="exampleForm.ControlSelect1">
				<Form.Label>Select Role:</Form.Label> 
                <br />
				<Form.Control
					as="select"
					value={selected}
					onChange={handleChange}
					multiple
				>
					<option value="SUPER_ADMIN">SUPER_ADMIN</option>
					<option value="ADMIN">ADMIN</option>
					<option value="MANAGER">MANAGER</option>
					<option value="CUSTOMER">CUSTOMER</option>
					<option value="GUEST">GUEST</option>
                    <option value="STUDENT">STUDENT</option>
                    <option value="TEACHER">TEACHER</option>
				</Form.Control>
			</Form.Group>
			<Alert variant="primary">Support multi roles.</Alert>
			<Button
				variant="primary"
				onClick={handleClick}
				disabled={!selected.length}
			>
				Login
			</Button>
		</div>
    )
}

export default Login
