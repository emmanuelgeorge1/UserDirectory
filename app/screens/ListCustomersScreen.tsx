import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, RefreshControl } from "react-native";
import usersData from "../data/user.json";
import { TEXTS } from "../constants/Constants";
import { styles } from "./styles/ListCustomersScreen.Style";
import axios from "axios";
import UserTypeButton from "./components/UserTypeButton";

type User = {
  id: number;
  name: string;
  type: number;
};
interface Props {
  onRefresh?: () => void;
}
const ListCustomersScreen: React.FC<Props> = ({ onRefresh }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [userType, setUserType] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Use an effect hook to set the initial users and filteredUsers state
  // when the component mounts
  useEffect(() => {
    setUsers(usersData.users);
    setFilteredUsers(usersData.users);
  }, []);
  // Use an effect hook to update the filteredUsers state whenever
  // the users or userType state changes
  useEffect(() => {
    if (users) {
      let filtered = users;
      // If a user type is selected, filter the users by type
      if (userType !== null) {
        filtered = filtered.filter((user) => user.type === userType);
      }
      // If there is search text, filter the users by name
      if (searchText !== "") {
        filtered = filtered.filter((user) =>
          // Convert both the user name and search text to lower case for case-insensitive comparison
          user.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      setFilteredUsers(filtered);
    }
  }, [userType, searchText]);

  // Define a callback function to refresh the users data
  const handleRefresh = React.useCallback((): void => {
    // Set refreshing to true to show the refresh indicator
    setRefreshing(true);
    // Reset the user type filter
    setUserType(null);
    axios
      .get("/api/users")
      .then((response) => {
        // Update the users and filteredUsers state with the new data
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
        // Set refreshing to false to hide the refresh indicator
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        // Set refreshing to false to hide the refresh indicator
        setRefreshing(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        value={searchText}
        onChangeText={setSearchText}
        placeholder={TEXTS.SEARCH_USERS}
      />
      <Text style={styles.header}>{TEXTS.USER_TYPES}</Text>
      <UserTypeButton
        type={0}
        text={TEXTS.ADMIN}
        userType={userType}
        setUserType={setUserType}
      />
      <UserTypeButton
        type={1}
        text={TEXTS.MANAGER}
        userType={userType}
        setUserType={setUserType}
      />
      <View style={styles.separator} />
      <Text style={styles.header}>{TEXTS.MANAGE_USERS}</Text>
      <FlatList
  
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.listItemName}>{item.name}</Text>
              <Text style={styles.listItemType}>
                {item.type === 0 ? TEXTS.ADMIN : TEXTS.MANAGER}
              </Text>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing}  onRefresh={onRefresh || handleRefresh} testID="refreshControl" />
        }
        testID="flatList"
      />
      <View style={styles.separator} />
    </View>
  );
}

export default ListCustomersScreen