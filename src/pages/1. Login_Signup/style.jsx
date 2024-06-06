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
  body: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 345.3, // proporção de 2.69x
    height: 100,
  },
  ButtonDefault: {
    width: '75.65%',
    height: '7.75%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});