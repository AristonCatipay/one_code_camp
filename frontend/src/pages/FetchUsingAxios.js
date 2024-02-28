import React, { useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const FetchUsingAxios = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=religious,explicit');
                
                const result = response.data;
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);   
            }
        };
        fetchData();
    }, []);

    const categoryColors = {
        "Programming": "warning",
        "Misc": "success",
        "Pun": "warning",
        "Spooky": "dark",
        "Christmas": "danger",
    };

    // Determine the background color for the card based on the category
    const background = data && data.category ? categoryColors[data.category] : "success";

    return (
        <Container>
            <h1>Fetch using Axios Page</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div>
                    <Card 
                    bg={background}
                    text="white"
                    style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{data && data.category}</Card.Title>
                            <Card.Subtitle className="mb-2">{data && data.setup}</Card.Subtitle>
                            <Card.Text>
                            {data && data.delivery}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </Container>
    )
}

export default FetchUsingAxios
