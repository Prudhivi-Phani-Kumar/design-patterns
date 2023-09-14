import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react';

import './Tabs.css';

const TabContext = createContext();

const Tabs = ({ value, onChange, children }) => {
	return (
		<TabContext.Provider value={{ value, onChange }}>
			<div className='tabs'>{children}</div>
		</TabContext.Provider>
	)
}

export default Tabs;

Tabs.HeaderContainer = ({ children }) => {
	return <div className='head'>{children}</div>
}

Tabs.HeaderItem = ({ label, index, children }) => {
	const { value, onChange } = useContext(TabContext);

	const onTabClick = () => {
		onChange(index)
	}

	return (
		<div
			onClick={onTabClick}
			className={`item ${index === value ? "active" : ""}`}
		>{label}</div>
	)
}

Tabs.ContentContainer = ({ children }) => {
	return <div className='content-wrapper'>{children}</div>
}

Tabs.Content = ({ children, index }) => {
	const { value } = useContext(TabContext);
	return value === index ? <div>{children}</div> : null;
}