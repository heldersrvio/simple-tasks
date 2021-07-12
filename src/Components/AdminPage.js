import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AdminPage = (props) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setUsers(/* */);
		};
		fetchData();
	}, []);

	return (
		<div className="admin-page">
			<h1>Admin</h1>
			<h2>Usuários</h2>
			{users.map((user, index) => {
				return (
					<div
						className="admin-user-item"
						onClick={(_e) => props.redirectToUserDetailPage(user)}
						key={index}
					>
						<span>{user.userName}</span>
					</div>
				);
			})}
		</div>
	);
};

AdminPage.propTypes = {
	redirectToUserDetailPage: PropTypes.func,
};

export default AdminPage;
