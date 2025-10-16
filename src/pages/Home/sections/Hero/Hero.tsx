import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/images/avatar.jpg";
import { Container, Grid, Typography, Box } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: "#1a1818ff",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacing(3),
        padding: theme.spacing(8, 2),
        overflowX: "hidden",
        [theme.breakpoints.up("xs")]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            gap: theme.spacing(6),
        },
    }));


    const StyledImg = styled("img")(({ theme }) => ({
        width: 290,
        height: 290,
        display: "block",
        margin: "0 auto",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: `0 0 10px ${theme.palette.primary.main}`,
        [theme.breakpoints.up("sm")]: {
            width: 240,
            height: 240,
        },
        [theme.breakpoints.up("md")]: {
            width: 280,
            height: 280,
        },
    }));



    return (
        <>
            <StyledHero>
                <Container maxWidth="md" disableGutters>


                    <Grid container spacing={3} alignItems="center" sx={{ justifyContent: 'center' }} direction={{ xs: 'column', md: 'row' }}>
                        <Box sx={{ width: { xs: '100%', md: '33.333%' }, display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
                            <StyledImg src={Avatar} />
                        </Box>
                        <Box sx={{ width: { xs: '100%', md: '66.666%' }, textAlign: 'center' }}>
                            <Typography color="primary" variant="h1" sx={{ fontSize: { xs: 'clamp(28px, 12vw, 48px)', md: '64px' }, lineHeight: 1.05, wordBreak: 'break-word', hyphens: 'auto' }}>Gabriel Lelis</Typography>
                            <Typography color="primary" variant="h2" sx={{ fontSize: { xs: 'clamp(16px, 6vw, 22px)', md: '28px' }, lineHeight: 1.2, wordBreak: 'break-word', hyphens: 'auto' }}>Desenvolvedor Full Stack Júnior</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                                <Box sx={{ width: { xs: '100%', md: '33.333%' }, display: 'flex', justifyContent: 'center' }}>
                                    <a href="/assets/resume.pdf" download style={{ width: '100%', textDecoration: 'none' }} aria-label="Download CV">
                                        <StyledButton>
                                            <DownloadIcon />
                                            <span>Download CV</span>
                                        </StyledButton>
                                    </a>
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '33.333%' }, display: 'flex', justifyContent: 'center' }}>
                                    <a href="mailto:hello@example.com" style={{ width: '100%', textDecoration: 'none' }} aria-label="Contact via email">
                                        <StyledButton>
                                            <EmailIcon />
                                            <span>Contact me</span>
                                        </StyledButton>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </StyledHero >
        </>
    )
}

export default Hero