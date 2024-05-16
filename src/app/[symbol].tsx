import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text } from "../components/Themed";
import top5 from "../../assets/data/top5.json";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";

const StockDetails = () => {
  const { symbol } = useLocalSearchParams();

  const stock = top5[symbol];

  if (!stock) {
    return <Text>Stock not found!</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{ title: stock.symbol, headerBackTitleVisible: false }}
      />
      <StockListItem stock={stock} />
      <Graph />
    </View>
  );
};

export default StockDetails;
