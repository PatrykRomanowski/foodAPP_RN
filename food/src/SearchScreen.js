import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "./api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
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

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>
      <Text>{resoults.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
