
import {
	Container,
	Group
} from "@mantine/core";

import MobileMenuButton from "@/components/MobileMenuButton";
import NotificationIcon from "@/components/Notification";

const Header = () => {

  	return (
		<Container fluid py="md" px="lg">
			<Group justify="space-between">
				<Group gap={5}>
					<MobileMenuButton />
				</Group>
				<Group>
					Default Header Content
					<NotificationIcon />
				</Group>

			</Group>
    	</Container>
  	);
};

export default Header;
