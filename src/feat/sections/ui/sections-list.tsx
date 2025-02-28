import { useGetSections } from "../api/get-sections";
import { Box, Typography, Card, CardMedia, CardContent, FormControlLabel, Checkbox} from "@mui/material";

export function SectionsList() {
    const { data: sections, isLoading, isError } = useGetSections();

    if(isLoading) {
        return <Typography>Загрузка данных, подождите...</Typography>
    }

    if(isError) {
        return <Typography>Ошибка при загрузке секций, повторите попытку позже</Typography>
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>Секции</Typography>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
            {sections?.map((section) => (
                <Card
                    key={section.id}
                    sx={{
                        flex: '1 1 calc(33% - 24px)',
                        minWidth: '280px',
                        maxWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                <CardMedia 
                    component = "img"
                    height = "140"
                    image = {section.image}
                    alt = {section.title}
                />
                <CardContent sx = {{ flexGrow: 1 }}>
                    <Typography variant = "h6" gutterBottom>
                        {section.title}
                    </Typography>
                    <Typography variant = "body2" color = "text.secondary" gutterBottom>
                        {section.content}
                    </Typography>
                    <Typography variant = "body2" color = "text.secondary">
                        Преподаватель: {section.teacher}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <FormControlLabel control={<Checkbox/>} label="Приду" />
                </Box>
                </Card>
            ))}
            </Box>
        </Box>
    )
}