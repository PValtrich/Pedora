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
    alignItems: 'center',
    gap: 10
  },
  agendamentos: {
    width: '90%',
    height: 120,
    backgroundColor: '#1A1A1A',
    borderRadius: 5
  },
  cima:{
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  baixo:{
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
    flex: 1
  },
  horario:{
    width: '35%',
    height: '50%',
    backgroundColor: '#1A1A1A',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  audio:{
    width: '35%',
    height: '50%',
    backgroundColor: '#5271FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  borda: {
    width: '20%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    width:'70%',
    height:'100%',
  },
});