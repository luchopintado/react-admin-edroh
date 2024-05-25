import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from "../../components/Header";
import { tokens } from "../../theme";

const loremAnswer = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quod, repellat asperiores accusamus deleniti sint natus, saepe quae sunt quam officia voluptatem sit quasi v
eniam minus iste odit possimus repellendus tenetur!`;
const faqs = [
    {
        question: "An Important Question",
        answer: loremAnswer
    },
    {
        question: "Your favorite Question",
        answer: loremAnswer
    },
    {
        question: "Interview Question",
        answer: loremAnswer
    },
    {
        question: "Material UI Question",
        answer: loremAnswer
    },
    {
        question: "React library Question",
        answer: loremAnswer
    },
    {
        question: "Yet another Question",
        answer: loremAnswer
    },
];

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Box mt="20px">
                {
                    faqs.map((faq, idx) => (
                        <Accordion key={`acc-key-${idx}`} defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color={colors.greenAccent[500]} variant="h5">
                                    { faq.question }
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    { faq.answer }
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Faq;