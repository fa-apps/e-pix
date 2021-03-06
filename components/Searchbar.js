import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Ionicons";

const listItems = ["Dev", "Business", "IT", "Office Prod", "Personnal Dev"];

class Searchbar extends Component {
  state = {
    searchBarFocused: true,
  };

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }
  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true }); // for Android
  };
  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true }); // for iOS
  };
  keyboardWillHide = () => {
    this.setState({ searchBarFocused: true }); // for both
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 80,
            backgroundColor: "#008000",
            justifyContent: "center",
            paddingHorizontal: 5,
          }}
        >
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
              }
              duration={400}
            >
              <Icon
                name={
                  this.state.searchBarFocused ? "md-arrow-back" : "ios-search"
                }
                style={{ fontSize: 24 }}
              />
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{ fontSize: 24, marginLeft: 15, flex: 1 }}
            />
          </Animatable.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? "rgba(0,0,0,0.3)"
              : "white",
          }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
