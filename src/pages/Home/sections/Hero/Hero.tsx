import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/images/avatar.jpg";
import { Container, Typography, Box } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CodeRain from "../../../../components/CodeRain";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: "#1a1818ff",
        position: 'relative',
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacing(3),
        padding: theme.spacing(8, 2),
        overflow: "hidden",  // Importante: mantém a chuva dentro do Hero
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
                {/* Matrix Rain: desktop */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <CodeRain
                        density={40}
                        speed={1.4}
                        fontSize={18}
                        trailAlpha={0.06}
                        headGlow={0.6}
                        color="rgba(166,77,255,0.9)"
                        style={{ zIndex: 0 }}
                    />
                </Box>
                {/* Matrix Rain: mobile */}
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <CodeRain 
                        density={32}
                        speed={1.2}
                        fontSize={14}
                        trailAlpha={0.055}
                        headGlow={0.5}
                        color="rgba(166,77,255,0.9)"
                        style={{ zIndex: 0 }}
                    />
                </Box>
                <Container 
                    maxWidth="md" 
                    disableGutters 
                    sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{
                        width: '100%',
                        maxWidth: 1200,
                        mx: 'auto',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4
                    }}>
                        {/* Avatar column: on mobile it appears first (top), on desktop it's on the left */}
                        <Box sx={{ flex: '0 0 33%', display: 'flex', justifyContent: 'center' }}>
                            <StyledImg src={Avatar} alt="Avatar" loading="lazy" />
                        </Box>

                            {/* Content column: on mobile below the avatar, on desktop on the right */}
                        <Box sx={{ flex: '1 1 auto', textAlign: { xs: 'center', md: 'left' }, px: { xs: 0, md: 2 } }}>
                            <Typography color="primary" variant="h1" sx={{ fontSize: { xs: 'clamp(28px, 12vw, 48px)', md: '64px' }, lineHeight: 1.05, wordBreak: 'break-word', hyphens: 'auto' }}>Gabriel Lelis</Typography>
                            <Typography color="primary" variant="h2" sx={{ fontSize: { xs: 'clamp(16px, 6vw, 22px)', md: '28px' }, lineHeight: 1.2, wordBreak: 'break-word', hyphens: 'auto' }}>Desenvolvedor Full Stack Júnior</Typography>

                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mt: 3, flexWrap: 'wrap' }}>
                                <Box sx={{ width: { xs: '100%', sm: 'auto' }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <a href="/assets/resume.pdf" download style={{ width: '100%', textDecoration: 'none' }} aria-label="Download CV">
                                        <StyledButton>
                                            <DownloadIcon />
                                            <span>Download CV</span>
                                        </StyledButton>
                                    </a>
                                </Box>
                                <Box sx={{ width: { xs: '100%', sm: 'auto' }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <a href="mailto:hello@example.com" style={{ width: '100%', textDecoration: 'none' }} aria-label="Contact via email">
                                        <StyledButton>
                                            <EmailIcon />
                                            <span>Contact me</span>
                                        </StyledButton>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </StyledHero >
        </>
    )
}

export default Hero