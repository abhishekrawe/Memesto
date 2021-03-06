import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        marginLeft: '50px',
        color: 'rgba(64, 53, 123, 1)',
      },
      image: {
        marginLeft: '15px',
      },
     [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: "column-reverse"
      }
     }
       
      
     
}));