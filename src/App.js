import './App.css';
import Customer from './components/Customer';

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
    return (
        <div>
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
        </div>
    );
}

export default App;
