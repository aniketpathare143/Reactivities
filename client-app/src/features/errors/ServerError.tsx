import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Container, Header, Segment } from "semantic-ui-react";

export default observer(function ServerError() {
    const { commonStore } = useStore();
    return (
        <Container>
            <Header as='h1' content='server error'></Header>
            <Header sub as='h5' color="red" content={commonStore.error?.message}></Header>
            {
                commonStore.error?.details && (
                    <Segment>
                        <Header as='h4' content='Stack trace' color="teal"></Header>
                        <code style={{ margin: '10px' }}>{commonStore.error.details}</code>
                    </Segment>
                )
            }
        </Container>
    )
})