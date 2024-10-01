import {useNDK} from "@nostr-dev-kit/ndk-react";
import {NDKFilter} from "@nostr-dev-kit/ndk";
import {useEffect, useState} from "react";
import {Col, Row, Container} from "react-bootstrap";

function Content(props) {
    const { fetchEvents } = useNDK();
    const {user} = props
    const [events, setEvents] = useState(null)

    const filter: NDKFilter = {
        kinds: [0]
    };

    const getProfiles = async function() {
        const events = await fetchEvents(filter);
        setEvents(events)
    }

    useEffect(() => {
        getProfiles()
    }, [user])

    if (events == null) {
        return <></>
    }

    return (
            <Container>
                {events.map((event) => {
                    if (event.tags.length > 0) {
                        console.log(event.tags)
                    }
                    return (
                        <Row>
                            <Col>{event.content}</Col>
                        </Row>
                    )
                })}

            </Container>
    )
}

export default Content;