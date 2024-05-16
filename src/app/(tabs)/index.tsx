import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { Text, View } from "../../components/Themed";
import top5 from "../../../assets/data/top5.json";
import StockListItem from "../../components/StockListItem";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query MyQuery($symbol: String) {
    quotes(symbol: $symbol) {
      value {
        name
        symbol
        percent_change
        close
      }
    }
  }
`;

export default function TabOneScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { symbol: "AAPL,IBM,MSFT,META,GOOGL,NVDA,TSLA,AMD" },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const stocks = data.quotes.map((q) => q.value);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Stock Info" }} />

      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
