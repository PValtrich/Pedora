import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  all: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 345.3, // proporção de 2.69x
    height: 100,
  },
  body: {
    width: '100%',
    height: '65%',
  },
  footer: {
    width: '100%',
    height: '10%',
  },
  button: {
    width: '75.65%',
    height: '15%',
    backgroundColor: '#fff',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    textAlign: 'right',
    marginRight: '5%',
    color: '#fff',
  },
  input: {
    width: '75.65%',
    height: '23%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: '5%',
  },
  setInputs: {
    width: '100%',
    height: '40%',
    gap: 10,
    alignItems: 'center',
  },
  registration_title: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goConnect: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});