import React, { useEffect } from "react";
import { Button, ButtonGroup, Card, Icon, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;

    //getting route parameter using useParams() hooks
    const { id } = useParams();
    //using side effect& checking if id is present then load activity
    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths="2">
                    <Button as={Link} to={`/manage/${activity.id}`} basic color="blue" content='Edit'></Button>
                    <Button as={Link} to='/activities' basic color="grey" content='Cancel'></Button>
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
})