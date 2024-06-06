import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  all: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: '28%',
  },
  body: {
    width: '100%',
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column"
  },
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
  subHeader: {
    width: '100%',
    height: '100%',
  },
  mainPoster: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  cartaz: {
    width: 90,
    height: 130,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  cinemaCard: {
    width: 90,
    height: 130,
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  scrollBeside: {
    width: '100%',
    height: '33.33%',
  },
  scrollUp: {
    width: '100%',
    height: '10%',
  },
  scrollDown: {
    width: '100%',
    height: '90%',
  }
});