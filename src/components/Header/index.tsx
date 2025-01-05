import classes from './header.module.css';

import {
	Container,
	Group
} from "@mantine/core";

import MobileMenuButton from "../MobileMenuButton";
import Notifications from '../Notification/Index';


const Header = () => {

  	return (
		<Container fluid py="md" px="lg">
			<Group justify="space-between">
				<Group gap={5}>
					<MobileMenuButton />
				</Group>
				<Group>
					Default Header Content
					<Notifications />








				</Group>

			</Group>
    	</Container>
  	);
};

export default Header;
