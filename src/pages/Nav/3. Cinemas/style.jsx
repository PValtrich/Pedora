import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  nav: {
    width: '100%',
    height: '7%',
    backgroundColor: '#424141',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconav: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  body: {
    width: '100%',
    height: '88%',
  },
  header: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultados: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    width: '75%',
    height: '50%',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  cityName: {
    fontSize: 16,
    color: '#000',
  },
  lista: {
    width: '95%',
    height: '90%',
    margin: 10
  }
});