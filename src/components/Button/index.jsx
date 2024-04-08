import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
    return (
        <Container
            type="button"
            {...rest}
            $isDisabled={loading} 
        >
            {title}
        </Container>
    );
}