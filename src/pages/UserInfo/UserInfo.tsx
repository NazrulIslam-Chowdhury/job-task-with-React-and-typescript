import React,
{
    FormEvent,
    useState
} from 'react';
import {
    TextField,
    Card,
    CardContent,
    Button
} from '@mui/material'
import './User.css';
import { useNavigate } from 'react-router-dom';


interface IState {
    user: {
        Name: string,
        Email: string,
        Phone: string
    }
}

const UserInfo = () => {
    const [user, setUser] = useState<IState>({
        user: {
            Name: "",
            Email: "",
            Phone: ""
        }
    });
    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            user: {
                ...user.user,
                [e.target.name]: e.target.value
            }
        })
    }

    // form submit and add data to local storage
    const submit = (e: FormEvent) => {
        e.preventDefault();
        const userInfo = user.user;
        localStorage.setItem("user", JSON.stringify(userInfo))
        navigate('/data');
    }

    return (
        <div className='user'>
            <Card>
                <CardContent>
                    <form onSubmit={submit}>
                        <TextField
                            id="name"
                            name='Name'
                            value={user.user.Name}
                            onChange={handleChange}
                            label="Name"
                            color='success'
                            variant='outlined'
                            placeholder='name'
                            sx={{ marginTop: '10px' }}
                            fullWidth
                        />
                        <TextField
                            id="email"
                            name='Email'
                            value={user.user.Email}
                            onChange={handleChange}
                            label="Email"
                            color='success'
                            type='email'
                            variant='outlined'
                            placeholder='Email'
                            sx={{ marginTop: '10px' }}
                            fullWidth
                        />
                        <TextField
                            id="phone"
                            name='Phone'
                            value={user.user.Phone}
                            onChange={handleChange}
                            label="Phone Number"
                            type='number'
                            color='success'
                            variant='outlined'
                            placeholder='Phone Number'
                            sx={{ marginTop: '10px' }}
                            fullWidth
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            sx={{
                                marginTop: '10px',
                                boxShadow: '2px 2px 2px 2px black'
                            }}
                        >
                            Save
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserInfo;