import React from 'react';
import Link from 'gatsby-link';
import { Accordion, AccordionItem } from 'react-sanfona';

import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';
import Button from './Button';
import TabPanelStoreContact from './TabPanelStoreContact';

import data from '../StorePicker/data/Data';
import config from '../../config/SiteConfig';

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
				<Link to="/store-locations" className="tabs-allstores">
					View All Stores
				</Link>
			</TabList>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'AZ').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'CA').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'ID').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'MT').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'NV').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'OK').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'OR').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>

			<TabPanel>
				<Accordion>
					{data.properties.filter(item => item.state === 'TX').map((item, i) => (
						<AccordionItem title={item.city} expanded={i + 1 === 1} key={item.phoneFormated}>
							<TabPanelStoreContact
								name={config.name}
								street={item.street}
								city={item.city}
								state={item.state}
								zip={item.zip}
								phone={item.phone}
								phoneFormated={item.phoneFormated}
								fax={item.fax}
								faxFormated={item.faxFormated}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</TabPanel>
		</Tabs>
		<Link to="/store-locations" className="tabs-allstores__mobile">
			View All Stores
		</Link>
	</div>
);

export default Root;
