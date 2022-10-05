import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
	0.5: "I'm fine",
	1: "Need a coffee",
	1.5: "I had one too many last night",
	2: "Where is my phone?",
	2.5: "The morning isn't going to be easy",
	3: "I've felt better",
	3.5: "My head is killing me",
	4: "I didn't do that, did I?",
	4.5: "Feel terrible all day",
	5: "Head in toilet- in bed for the day",
};

function getLabelText(value: number) {
	return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating() {
	const [value, setValue] = React.useState<number | null>(2);
	const [hover, setHover] = React.useState(-1);

	return (
		<Box
			sx={{

				display: "flex",
				alignItems: "center",
			}}>
			<Rating
				name='hover-feedback'
				value={value}
				precision={0.5}
				getLabelText={getLabelText}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				onChangeActive={(event, newHover) => {
					setHover(newHover);
				}}
				emptyIcon={
					<StarIcon
						style={{ opacity: 0.55 }}
						fontSize='inherit'
					/>
				}
			/>
			{value !== null && (
				<Box sx={{ ml: 2 }}>
					{labels[hover !== -1 ? hover : value]}
				</Box>
			)}
		</Box>
	);
}
