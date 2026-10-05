import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: 'rgba(32, 38, 46, 0.92)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2D3540',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  badge: {
    color: '#00B5CC',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 22,
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#97CE4C',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#171B21',
    fontSize: 15,
    fontWeight: 'bold',
  },

});