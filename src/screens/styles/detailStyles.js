import { StyleSheet } from 'react-native';

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171B21',
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  header: {
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#171B21',
    fontWeight: 'bold',
    fontSize: 13,
  },
  card: {
    backgroundColor: '#20262E',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    color: '#00B5CC',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 8,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 2,
  },
});