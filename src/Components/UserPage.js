import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Firebase from '../Firebase';

const UserPage = (props) => {
	const [userInfo, setUserInfo] = useState(null);
	const [isShowingAddTaskSection, setIsShowingAddTaskSection] = useState(false);
	const [newTaskInput, setNewTaskInput] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			setUserInfo(/* await Firebase.getUserData(props.user) */);
		};
		fetchData();
	}, []);

	const deleteTask = (taskIndex) => {};

	const addTask = () => {
		setNewTaskInput('');
		setIsShowingAddTaskSection(false);
	};

	const addTaskSection = (
		<div className="add-task-section">
			<input
				type="text"
				className="add-new-task-input"
				value={newTaskInput}
				onChange={(e) => setNewTaskInput(e.target.valye)}
			></input>
			<button onClick={addTask}>Adicionar</button>
		</div>
	);

	const tasksSection =
		userInfo !== null ? (
			<div className="tasks-section">
				<h2>Tarefas</h2>
				{userInfo.tasks.map((task, index) => {
					return (
						<div className="task" key={index}>
							<span>{task}</span>
							<button
								className="delete-task-button"
								onClick={(_e) => deleteTask(index)}
							></button>
						</div>
					);
				})}
				{isShowingAddTaskSection ? (
					addTaskSection
				) : (
					<button
						className="add-task-button"
						onClick={(_e) => setIsShowingAddTaskSection(true)}
					></button>
				)}
			</div>
		) : null;

	return (
		<div className="user-page">
			{userInfo !== null ? (
				<div className="header">
					<h1 className="user-page-header">{userInfo.name}</h1>
					<button className="logout-button" onClick={props.logout}>
						Sair
					</button>
				</div>
			) : null}
			{tasksSection}
		</div>
	);
};

UserPage.propTypes = {
	user: PropTypes.string,
	logout: PropTypes.func,
};

export default UserPage;
