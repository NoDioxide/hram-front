import { SectionsList } from "@/feat/sections";
import { Container } from "@mui/material";

export default function SectionsPage() {
  return (
  <div>
    <Container maxWidth = "lg" sx = {{ mt: 4, mb: 4}}>
      <h1>Секции</h1>
      <SectionsList/>
    </Container>
  </div>
  )
}
