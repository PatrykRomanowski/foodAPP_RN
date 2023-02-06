import React, {
    useState,
    useEffect
} from 'react';
import yelp from '../yelp';

export default () => {
    const [resoults, setResoults] = useState([]);
    const [errorMessage, seterrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                },
            });
            setResoults(response.data.businesses);
        } catch (error) {
            seterrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi("pasta");
    }, []);
    return [searchApi, resoults, errorMessage];
}