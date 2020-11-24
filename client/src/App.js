import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/any',
    name: '채민수',
    birthday: '950502',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/any',
    name: '채민수22',
    birthday: '950502222',
    gender: '남자22',
    job: '대학생22',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/any',
    name: '채민수3',
    birthday: '95050233',
    gender: '남자33',
    job: '대학생33',
  },
];

function App() {
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
