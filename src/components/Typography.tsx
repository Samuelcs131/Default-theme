import { Container, Font, Heading } from "../styles/typography";

const Typography = (): JSX.Element => {
    return(<>
    <Container>
        <h6>Typography</h6>
        <Heading>
            <span> 
                <h1>Aa</h1>
                <h4>Poppins Bold</h4>
            </span>
            <span>
                <h1>Aa</h1>
                <h4>Poppins Medium</h4>
            </span>
            <span>
                <h1>Aa</h1>
                <h4>Poppins Light</h4>
            </span>
        </Heading>
        <Font>
            <div>
                <h6>HeadLines</h6>
                <h1>h1 headline</h1>
                <h2>h2 headline</h2>
                <h3>h3 headline</h3>
                <h4>h4 headline</h4>
                <h5>h5 headline</h5>
                <h6>h6 headline</h6>
            </div>
            <div>
                <h6>HeadLines</h6>
                <p>I think we need to start from scratch. Jazz it up a little bit- use a funky color like purple.</p>
                <p><strong> Can you add a bit of pastel pink and baby blue because the purple alone looks too fancy.</strong></p>
                <p><em> Make the purple more well, purple-er. Try a more powerful colour, it needs to be the same, but totally different.</em></p>
            </div>
        </Font>
    </Container>
    </>)
}

export default Typography;