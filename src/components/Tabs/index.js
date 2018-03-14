import React, { Component } from 'react';

import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';
import Button from './Button';

import data from '../StorePicker/data/Data';

const storesTwoDemsional = [...data.properties]
	.sort((a, b) => {
		if (a.stateFull < b.stateFull) return -1;
		if (a.stateFull > b.stateFull) return 1;
		return 0;
	})
	.reduce((customers, line) => {
		customers[line.state] = customers[line.state] || [];
		customers[line.state].push(line);
		return customers;
	}, {});

/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

/* --- */

const Root = () => (
	<div className="Root">
		<Tabs selected={1}>
			<TabList>
				{Object.keys(storesTwoDemsional).map(el => {
					const singleStore = storesTwoDemsional[el][0];
					return (
						<Tab key={singleStore.state}>
							<Button>
								<span className="city-full">{singleStore.stateFull}</span>
								<span className="city-abrv">{singleStore.state}</span>
							</Button>
						</Tab>
					);
				})}
				{/* <Link to="/store-locations" style={{ display: 'block', textAlign: 'right' }}>View All Stores</Link> */}
			</TabList>

			<TabPanel>
				{data.properties.filter(item => item.state === 'AZ').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'CA').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'ID').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'MT').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'NV').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'OK').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'OR').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>

			<TabPanel>
				{data.properties.filter(item => item.state === 'TX').map(item => (
					<ul key={item.phoneFormated}>
						<li>{item.city}</li>
					</ul>
				))}
			</TabPanel>
		</Tabs>
	</div>
);

export default Root;
