import React, { Component } from "react";
import { Container, Content, View, Text } from "native-base";
import { DataTable } from "react-native-paper";
import MainHeader from "../../../components/Header";
import {Platform, StatusBar, StyleSheet} from "react-native";
import { TextField } from "react-native-materialui-textfield";
import { AsyncStorage } from "react-native";

class ArchiveAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("token").then(res => {
      if (!res) {
        this.props.navigation.navigate("Login");
      }
    });
  }
  render() {
    const { data } = this.state;
    const {navigation} = this.props

    return (
      <Container
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
          }}
      >
        <MainHeader navigation={navigation} menu={true} />
        <Content>
          <View style={styles.contentWrapper}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <View>
                <Text style={styles.title}>أرشيف الحسابات</Text>
              </View>
              <View style={[styles.textField, { width: "50%" }]}>
                <TextField label=" رقم الحساب" />
              </View>
            </View>
            <DataTable>
              <DataTable.Header
                style={{
                  paddingHorizontal: 0
                }}
              >
                <DataTable.Title style={styles.tableItem}>
                  التاريخ
                </DataTable.Title>
                <DataTable.Title style={styles.tableItem}>
                  Detail View
                </DataTable.Title>
                <DataTable.Title style={styles.tableItem}>له</DataTable.Title>
                <DataTable.Title style={styles.tableItem}>عليه</DataTable.Title>
              </DataTable.Header>

              {data &&
                data.map((tableItem, index) => {
                  return (
                    <DataTable.Row style={{ paddingHorizontal: 0 }}>
                      <DataTable.Cell style={styles.tableItem}>
                        {tableItem.accountNumber}
                      </DataTable.Cell>
                      <DataTable.Cell style={styles.tableItem}>
                        {tableItem.name}
                      </DataTable.Cell>
                      <DataTable.Cell style={styles.tableItem}>
                        {tableItem.phone}
                      </DataTable.Cell>
                      <DataTable.Cell style={styles.tableItem}>
                        {tableItem.dateCreated}
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                  console.log(page);
                }}
                label={`1-6 of ${data.length}`}
              />
            </DataTable>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    width: "100%"
  },
  contentWrapper: {
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 10
  },
  title: {
    fontSize: 20
  },
  text: { flex: 1, textAlign: "center" },
  btnWrapper: {
    width: "100%",
    borderRadius: 5
  },
  tableItem: {
    justifyContent: "center"
  }
});

export default ArchiveAccounts;

const data = [
  {
    accountNumber: 18932,
    name: "محمد دلاهى",
    phone: "32342342",
    dateCreated: "2-3-2019"
  },
  {
    accountNumber: 18932,
    name: "محمد دلاهى",
    phone: "32342342",
    dateCreated: "2-3-2019"
  },
  {
    accountNumber: 18932,
    name: "محمد دلاهى",
    phone: "32342342",
    dateCreated: "2-3-2019"
  },
  {
    accountNumber: 18932,
    name: "محمد دلاهى",
    phone: "32342342",
    dateCreated: "2-3-2019"
  }
];
