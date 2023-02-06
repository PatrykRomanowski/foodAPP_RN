import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import yelp from "./api/yelp";
import useResoults from "./api/hooks/useResoults";
import ResoultsList from "./components/ResoultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, resoults, errorMessage] = useResoults();

  const filterResoultByPrice = (price) => {
    return resoults.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ marginLeft: 10 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>
      <Text>{resoults.length}</Text>
      <ScrollView>
        <ResoultsList
          results={filterResoultByPrice("$")}
          title="Coast Effective"
        />
        <ResoultsList
          results={filterResoultByPrice("$$")}
          title="Big Pricier"
        />
        <ResoultsList
          results={filterResoultByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
