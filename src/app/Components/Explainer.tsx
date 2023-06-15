import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface ExplainerProps {
	isOpen: boolean;
	onClose: () => void;
}

const Explainer = ({ isOpen, onClose }: ExplainerProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader color="#1A202C">About Telemeasure</ModalHeader>
				<ModalCloseButton />
				<ModalBody color="#1A202C">
					Telemeasure is a project I'm using as an excuse to tinker with Next.js and Chakra UI. Beyond that, it's a nice outlet for the creative urges
					once I've finished work!
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default Explainer;
