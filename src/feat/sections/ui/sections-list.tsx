import { useGetSections } from "../api/get-sections";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export function SectionsList() {
    const { data: sections, isLoading, isError } = useGetSections();

    if(isLoading) {
        return <Typography>Загрузка данных, подождите...</Typography>
    }

    if(isError) {
        return <Typography>Ошибка при загрузке секций, повторите попытку позже</Typography>
    }

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Секции</Typography>
            <List>
                {sections?.map((section) => (
                    <ListItem>
                        <ListItemText>
                            primary = {section.title}
                            secondary = {section.content}
                        </ListItemText> 
                        <Typography variant="body2">Преподаватель: {section.teacher}</Typography>
                    </ListItem> 
                ))}
            </List>
        </Box>
    )
}