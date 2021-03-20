import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Surface } from 'react-native-paper';
import { StackNavigatorParamlist } from './components/navigation/types';


type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Informations = (props: Props) => {
  const theme = useTheme();

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const handlePress = (type: number) => {
    if (type === 1) {
      setExpanded1(!expanded1);
      setExpanded2(false);
      setExpanded3(false);
    } else if (type === 2) {
      setExpanded1(false);
      setExpanded2(!expanded2);
      setExpanded3(false);
    } else if (type === 3) {
      setExpanded1(false);
      setExpanded2(false);
      setExpanded3(!expanded3);
    }

  };
  return (
    <Surface style={styles.container}>
      <View>
        <List.Section style={styles.content}>

          <List.Accordion
            title="Vôo"
            left={props => <List.Icon {...props} icon={({ color, size }) => (
              <MaterialCommunityIcons name="airplane-takeoff" color={color} size={30} />
            )} />}
            expanded={expanded1}
            onPress={() => handlePress(1)}
            style={styles.accordion}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Hospedagem"
            left={props => <List.Icon {...props} icon={({ color, size }) => (
              <MaterialCommunityIcons name="bed" color={color} size={30} />
            )} />}
            expanded={expanded2}
            onPress={() => handlePress(2)}
            style={styles.accordion}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Aluguel de Carro"
            left={props => <List.Icon {...props} icon={({ color, size }) => (
              <MaterialCommunityIcons name="car-side" color={color} size={30} />
            )} />}
            expanded={expanded3}
            onPress={() => handlePress(3)}
            style={styles.accordion}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>

    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    marginTop: 0,
  },
  accordion: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  }
});