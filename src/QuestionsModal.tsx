import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Rating from "./Rating";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: '90%',
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

type QuestionsModalProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
};

export default function questionsModal(props: QuestionsModalProps) {
	const { open, setOpen } = props;

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'>
						Does beer give you a hangover?
					</Typography>
					<Rating />
				</Box>
			</Modal>
		</div>
	);
}
