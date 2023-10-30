import { Container, Text, Button, Group } from '@mantine/core';
import classes from './css/Home.module.css';

export default function Home() {
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        Etkileyici
                    </Text>{' '}
                    Bir Internet ve Bilgisayar Optimizasyon Aracı
                </h1>
                <br />
                <Text className={classes.description} color="dimmed">
                    Tamamen ücretsiz bir şekilde internet bağlantınızı optimize edebilir, bilgisayarınızın performansını düşüren bazı etkenlerden arınabilirsiniz.
                </Text>
                <br />
                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Şimdi Başla
                    </Button>

                    <Button
                        component="a"
                        href="https://www.canermastan.com"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
}