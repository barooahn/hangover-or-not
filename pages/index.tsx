import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import Button from "@mui/material/Button";
import QuestionsModal from "../src/QuestionsModal";

const Home: NextPage = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	return (
		<Container maxWidth='lg'>
			<Box
				sx={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Typography variant='h4' component='h1' gutterBottom>
					Hangover Or Not
				</Typography>

				<Button onClick={handleOpen}>Open modal</Button>

				<Copyright />
			</Box>
			<QuestionsModal open={open} setOpen={setOpen} />
		</Container>
	);
};

export default Home;
