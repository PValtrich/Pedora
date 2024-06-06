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
    backgroundColor: '#000'
  },
  header: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    width: '100%',
    height: '88%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSizes: 15,
    width: '95%',
    height: '5%',
    margin: 10,
    color: '#fff'
  },
  bodyscrool: {
    width: '90%',
    height: '95%',
    alignItems: 'center',
  },
  botao: {
    width: '95%',
    height: '6%',
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});