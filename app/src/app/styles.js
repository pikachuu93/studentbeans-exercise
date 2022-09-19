export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'stretch'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fafafa'
  },

  text: {
    order: '2',
    flex: '1 0 40%',
    alignSelf: 'flex-start'
  }
}
