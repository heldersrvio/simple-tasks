import React from 'react';
import PropTypes from 'prop-types';

const UserDetailPage = (props) => {
	return (
		<div className="user-detail-page">
			<h1>{props.userInfo.userName}</h1>
			<div className="user-info-section">
				<div className="user-info-name-section">
					<label htmlFor="name">Nome: </label>
					<span>{props.userInfo.name}</span>
				</div>
				<div className="user-info-email-section">
					<label htmlFor="email">E-mail: </label>
					<span>{props.userInfo.email}</span>
				</div>
				<div className="user-info-tasks-section ">
					<label htmlFor="tasks">Tarefas: </label>
					<ul>
						{props.userInfo.tasks.map((task, index) => {
							return (
								<span className="user-info-task-item" key={index}>
									{task}
								</span>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

UserDetailPage.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		userName: PropTypes.string,
		email: PropTypes.string,
		tasks: PropTypes.arrayOf(PropTypes.string),
	}),
};

export default UserDetailPage;
